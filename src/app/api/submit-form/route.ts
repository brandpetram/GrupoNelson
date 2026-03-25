import { NextResponse } from 'next/server'
import { Resend } from 'resend'

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

function buildEmailHtml(fields: { label: string; value: string }[]) {
  const rows = fields
    .map(
      f => `
      <tr>
        <td style="padding:8px 0 2px;font-size:14px;font-weight:600;color:#888;text-transform:uppercase;letter-spacing:0.5px">${f.label}</td>
      </tr>
      <tr>
        <td style="padding:0 0 12px;font-size:16px;color:#333;line-height:24px">${f.value}</td>
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
      Desde <a href="https://gruponelson.mx" target="_blank" style="color:#2754C5;text-decoration:underline">gruponelson.mx</a>
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
  try {
    const body = await request.json()

    const fields = [
      { label: 'Nombre', value: body.full_name },
      { label: 'Email', value: body.email },
      { label: 'Teléfono', value: body.phone_number },
      { label: 'Empresa', value: body.company },
      { label: 'Tipo', value: body.role },
      { label: 'Parque industrial', value: body.park },
      { label: 'Interés', value: body.interest },
      { label: 'Mensaje', value: body.message },
    ].filter(f => f.value)

    const resend = getResend()
    const { error } = await resend.emails.send({
      from: 'Grupo Nelson <leads@brandpetram.marketing>',
      to: RECIPIENTS,
      bcc: ['notifications@brandpetram.com'],
      replyTo: body.email,
      subject: `Nuevo lead desde gruponelson.mx — ${body.full_name}`,
      html: buildEmailHtml(fields),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Error enviando email' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('API error:', err)
    return NextResponse.json({ error: 'Error interno' }, { status: 500 })
  }
}
