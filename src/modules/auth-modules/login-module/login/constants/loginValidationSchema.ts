import * as yup from 'yup'

import { useTranslation } from '@/components/translation'

export const schemaLogin = () => {
  const { t } = useTranslation()

  return yup.object({
    email: yup.string().required(t.auth.login.errorsSchema.email),
    password: yup.string().required(t.auth.login.errorsSchema.password),
  })
}
