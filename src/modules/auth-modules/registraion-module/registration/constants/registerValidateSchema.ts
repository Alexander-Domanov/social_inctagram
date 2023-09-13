import * as yup from 'yup'

import { useTranslation } from '@/components/translation'

export const registrationSchema = () => {
  const { t } = useTranslation()

  return yup.object({
    userName: yup
      .string()
      .required(t.auth.registration.errors.userName.required)
      .min(6, t.auth.registration.errors.userName.min)
      .max(30, t.auth.registration.errors.userName.max)
      .trim(),
    email: yup
      .string()
      .required(t.auth.registration.errors.email.required)
      .email('email must be a valid email\n')
      .trim(),
    password: yup
      .string()
      .required()
      .min(6, t.auth.registration.errors.password.min)
      .max(20, t.auth.registration.errors.password.max)
      .trim(),
    confirmPassword: yup
      .string()
      .required()
      .min(6, t.auth.registration.errors.confirmPassword.min)
      .max(20, t.auth.registration.errors.confirmPassword.max)
      .oneOf([yup.ref('password')!], t.auth.registration.errors.confirmPassword.password)
      .trim(),
  })
}
