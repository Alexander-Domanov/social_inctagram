import React from 'react'

import { useRouter } from 'next/router'

import { useChangingFormWhenChangingLanguage, useGlobalForm } from '@/common'
import { PATH_ROUTE } from '@/common/constants/PATH_ROUTE'
import { ResendVerificationForm } from '@/components/auth-components'
import { useSendVerifyEmail, verificationSchema } from '@/modules/auth-modules/registraion-module'

export const ResendVerificationEmail = () => {
  const { push } = useRouter()

  const { handleSubmit, trigger, register, reset, setCustomError, errors } = useGlobalForm(
    verificationSchema()
  )

  useChangingFormWhenChangingLanguage({ trigger, errors })
  const { isLoading, resendVerification } = useSendVerifyEmail(
    setCustomError,
    () => reset(),
    () => push(PATH_ROUTE.LOGIN)
  )

  const submitData = (data: any) => {
    resendVerification(data)
  }

  return (
    <ResendVerificationForm
      isLoading={isLoading}
      submitData={submitData}
      handleSubmit={handleSubmit}
      error={errors?.email?.message}
      register={register}
    />
  )
}
