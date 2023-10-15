import * as yup from 'yup'

import { useTranslation } from '@/components/translation'

export const verificationSchema = () => {
  const { t } = useTranslation()

  return yup.object({
    email: yup.string().required(t.auth.registration.resendForm.error.email).trim(),
  })
}
