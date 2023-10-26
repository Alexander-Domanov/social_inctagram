import { authInstance } from '@/services/api/instanse'

export const sendRegisterRequest = ({
  email,
  password,
  userName,
  consentGiven,
}: Omit<any, 'confirmPassword'>) => {
  return authInstance.post('auth/registration', { userName, email, password, consentGiven })
}
