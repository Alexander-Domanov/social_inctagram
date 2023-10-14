import { authInstance } from '@/services/api/instanse'

export const sendVerificationLink = ({ email }: any) => {
  return authInstance.post('auth/registration-email-resending', { email })
}
