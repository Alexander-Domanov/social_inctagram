import { authInstance } from '@/services'
import { ResLogin } from '@/types'

export const sendLoginRequest = ({ email, password }: any) => {
  return authInstance.post<ResLogin>('auth/login', { email, password })
}
