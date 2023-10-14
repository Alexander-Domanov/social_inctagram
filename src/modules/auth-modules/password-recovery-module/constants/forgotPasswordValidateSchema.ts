import * as yup from 'yup'

import { useTranslation } from '@/components/translation'

export const forgotPassSchema = () => {
  const { t } = useTranslation()

  return yup.object({
    email: yup
      .string()
      .trim()
      .required(t.auth.forgotPassword.error.required)
      .email(t.auth.forgotPassword.error.email),
  })
}
