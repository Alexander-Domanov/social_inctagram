import * as yup from 'yup'

import { useTranslation } from '@/components/translation'

export const createNewPasswordSchema = () => {
  const { t } = useTranslation()

  return yup.object({
    password: yup
      .string()
      .trim()
      .required()
      .min(6, t.auth.recovery.createNewPasswordPage.error.password.min)
      .max(20, t.auth.recovery.createNewPasswordPage.error.password.max),
    confirmPassword: yup
      .string()
      .trim()
      .required()
      .min(6, t.auth.recovery.createNewPasswordPage.error.confirmPassword.min)
      .max(20, t.auth.recovery.createNewPasswordPage.error.confirmPassword.max)
      .oneOf(
        [yup.ref('password')!],
        t.auth.recovery.createNewPasswordPage.error.confirmPassword.password
      ),
  })
}
