import React from 'react'

import Head from 'next/head'

import { getLayoutWithHeader } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { ResendRecoveryForm } from '@/modules/auth-modules/password-recovery-module'
import { NextPageWithLayout } from '@/pages/_app'

const ResendForm: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.auth.recovery.resendForm.headTitle}</title>
      </Head>
      <ResendRecoveryForm />
    </>
  )
}

ResendForm.getLayout = getLayoutWithHeader
export default ResendForm
