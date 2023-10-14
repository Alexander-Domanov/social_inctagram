import React, { FC } from 'react'

import Head from 'next/head'

import { PATH_ROUTE } from '@/common'
import { ResendingVerificationLink } from '@/components/auth-components'
import { useTranslation } from '@/components/translation'
import {
  EmailSuccessMessage,
  useSendConfirmationCode,
} from '@/modules/auth-modules/registraion-module'
import { Preloader } from '@/ui'

type PropsType = { code: string }

export const ResendingVerificationEmail: FC<PropsType> = ({ code }) => {
  const { isLoading, isError, isSuccess } = useSendConfirmationCode(code)
  const { t } = useTranslation()

  if (isLoading) return <Preloader />

  return (
    <>
      <Head>
        <title>
          {isSuccess
            ? t.auth.registrationConfirmation.emailSuccessMessage.headTitle
            : t.auth.registrationConfirmation.ResendingVerificationLink.headTitle}
        </title>
      </Head>
      {isSuccess && <EmailSuccessMessage />}
      {isError && <ResendingVerificationLink path={PATH_ROUTE.RESEND_FORM} />}
    </>
  )
}
