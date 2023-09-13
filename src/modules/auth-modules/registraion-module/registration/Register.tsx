import React from 'react'

import Link from 'next/link'

import { PATH_ROUTE } from '@/common/constants/PATH_ROUTE'
import { FormLayout } from '@/components/FormLayout'
import { useTranslation } from '@/components/translation'
import {
  GoogleGithubRegistration,
  RegistrationForm,
} from '@/modules/auth-modules/registraion-module'
import { NameTitle } from '@/ui'

export const Register = () => {
  const { t } = useTranslation()

  return (
    <FormLayout className="mt-[60px]">
      <NameTitle
        nameTitle={t.auth.signUp}
        className="font-bold text-light-100 text-[20px] leading-[36px] mb-[12px]"
      />
      <GoogleGithubRegistration />
      <RegistrationForm />
      <Link
        href={PATH_ROUTE.RESEND_FORM}
        className="font-semibold text-[16px] leading-[24px] text-dark-100"
      >
        {t.auth.registration.confirmationMessage}
      </Link>
      <span className="pt-[18px] pb-[12px] text-[16px] leading-[24px] text-light-100 font-normal">
        {t.auth.registration.haveAccount}
      </span>
      <Link
        href={PATH_ROUTE.LOGIN}
        className="font-semibold text-[16px] leading-[24px] text-accent-500"
      >
        {t.auth.singIn}
      </Link>
    </FormLayout>
  )
}
