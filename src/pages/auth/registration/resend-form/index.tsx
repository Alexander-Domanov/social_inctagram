import React from 'react'

import Head from 'next/head'

import { getLayoutWithHeader } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { ResendVerificationEmail } from '@/modules/auth-modules/registraion-module'
import { NextPageWithLayout } from '@/pages/_app'

const ResendForm: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.auth.registration.resendForm.title}</title>
      </Head>
      <ResendVerificationEmail />
    </>
  )
}

ResendForm.getLayout = getLayoutWithHeader
export default ResendForm
