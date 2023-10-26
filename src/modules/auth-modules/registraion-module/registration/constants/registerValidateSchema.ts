import * as yup from 'yup'

import { passwordRegex, usernameRegex } from '@/common'
import { useTranslation } from '@/components/translation'

export const registrationSchema = () => {
  const { t } = useTranslation()

  return yup.object({
    userName: yup
      .string()
      .required(t.auth.registration.errors.userName.required)
      .min(6, t.auth.registration.errors.userName.min)
      .max(30, t.auth.registration.errors.userName.max)
      .matches(
        usernameRegex,
        t.profile.settingsProfile.settingsProfileTabs.generalInformation.userName.matches
      )
      .trim(),
    email: yup
      .string()
      .required(t.auth.registration.errors.email.required)
      .email(t.auth.registration.errors.email.email)
      .trim(),
    password: yup
      .string()
      .required()
      .min(6, t.auth.registration.errors.password.min)
      .max(20, t.auth.registration.errors.password.max)
      .matches(passwordRegex, t.auth.registration.errors.password.matches)
      .trim(),
    confirmPassword: yup
      .string()
      .required()
      .min(6, t.auth.registration.errors.confirmPassword.min)
      .max(20, t.auth.registration.errors.confirmPassword.max)
      .oneOf([yup.ref('password')!], t.auth.registration.errors.confirmPassword.password)
      .trim(),
    consentGiven: yup.boolean().oneOf([true], t.auth.registration.errors.consentGiven.errors),
  })
}
