import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { submitSchema } from '@/lib/form-schema'
import { escapeHtml } from '@/lib/escape-html'
import { checkRatelimit } from '@/lib/ratelimit'
import { getClientIp } from '@/lib/get-client-ip'
import { verifyTurnstile } from '@/lib/turnstile'

function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('RESEND_API_KEY not configured')
  }
  return new Resend(process.env.RESEND_API_KEY)
}

const RECIPIENTS = [
  'hjg@nelson.com.mx',
  'hjn@nelson.com.mx',
  'jcnelson@nelson.com.mx',
  'sosuna@nelson.com.mx',
]

function logGuard(layer: string, reason: string, ip?: string) {
  console.log(
    JSON.stringify({
      tag: 'form-guard',
      layer,
      reason,
      ip: ip ?? null,
      timestamp: new Date().toISOString(),
    })
  )
}

function buildEmailHtml(fields: { label: string; value: string }[]) {
  const rows = fields
    .map(
      f => `
      <tr>
        <td style="padding:8px 0 2px;font-size:14px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px">${escapeHtml(f.label)}</td>
      </tr>
      <tr>
        <td style="padding:0 0 12px;font-size:16px;color:#333;line-height:24px">${escapeHtml(f.value)}</td>
      </tr>`
    )
    .join('')

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="background:#fff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif">
  <div style="max-width:560px;margin:0 auto;padding:20px 24px 48px">
    <h1 style="font-size:28px;font-weight:bold;color:#333;margin:40px 0 0">Nuevo lead</h1>
    <p style="font-size:16px;color:#666;margin:8px 0 24px">
      Desde <a href="https://nelson.com.mx" target="_blank" style="color:#2754C5;text-decoration:underline">nelson.com.mx</a>
    </p>
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
    <table style="width:100%">${rows}</table>
    <hr style="border:none;border-top:1px solid #eee;margin:24px 0">
    <p style="font-size:13px;color:#ababab">
      Este email fue enviado automáticamente por
      <a href="https://brandpetram.com" target="_blank" style="color:#898989;text-decoration:underline;font-size:13px">Brandpetram</a>
    </p>
  </div>
</body>
</html>`
}

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    logGuard('parse', 'invalid JSON body')
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 })
  }

  const parsed = submitSchema.safeParse(body)
  if (!parsed.success) {
    logGuard('zod', parsed.error.issues.map(i => i.path.join('.') + ':' + i.code).join(','))
    return NextResponse.json({ error: 'invalid_payload' }, { status: 400 })
  }

  const data = parsed.data
  const ip = getClientIp(request)

  if (data.contact_url && data.contact_url.length > 0) {
    logGuard('honeypot', 'honeypot field populated', ip)
    return NextResponse.json({ success: true })
  }

  const rate = await checkRatelimit(ip)
  if (!rate.success) {
    logGuard('ratelimit', `exceeded, remaining=${rate.remaining}`, ip)
    return NextResponse.json({ error: 'rate_limited' }, { status: 429 })
  }

  const verify = await verifyTurnstile(data.turnstileToken, ip)
  if (!verify.ok) {
    logGuard('turnstile', `code=${verify.code}`, ip)
    return NextResponse.json(
      { error: verify.code === 'expired' ? 'verification_expired' : 'verification_failed' },
      { status: 403 }
    )
  }

  const fields = [
    { label: 'Nombre', value: data.full_name },
    { label: 'Email', value: data.email },
    { label: 'Teléfono', value: data.phone_number },
    { label: 'Empresa', value: data.company },
    { label: 'País', value: data.country },
    { label: 'Tipo', value: data.role },
    { label: 'Parque industrial', value: data.park },
    { label: 'Interés', value: data.interest },
    { label: 'Mensaje', value: data.message },
  ].filter((f): f is { label: string; value: string } => Boolean(f.value))

  try {
    const resend = getResend()
    const { error } = await resend.emails.send({
      from: 'Grupo Nelson <leads@nelson.com.mx>',
      to: RECIPIENTS,
      bcc: ['notifications@brandpetram.com'],
      replyTo: data.email,
      subject: `Nuevo lead desde nelson.com.mx — ${data.full_name}`,
      html: buildEmailHtml(fields),
    })

    if (error) {
      logGuard('resend', JSON.stringify(error))
      return NextResponse.json({ error: 'send_failed' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    logGuard('resend', err instanceof Error ? err.message : 'unknown')
    return NextResponse.json({ error: 'internal' }, { status: 500 })
  }
}
