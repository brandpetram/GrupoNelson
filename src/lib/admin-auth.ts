import { createHmac } from 'crypto'

export function computeHmac(password: string): string {
  return createHmac('sha256', password).update('admin-auth-v1').digest('hex')
}
