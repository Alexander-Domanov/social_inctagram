import React from 'react'

import Head from 'next/head'

import { getLayoutWithHeader } from '@/components/layout/LayoutWithHeader/LayoutWithHeader'
import { useTranslation } from '@/components/translation'
import { ForgotPassword } from '@/modules/auth-modules/password-recovery-module'
import { NextPageWithLayout } from '@/pages/_app'

const PageForgotPassword: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t.auth.forgotPassword.title}</title>
      </Head>
      <ForgotPassword />
    </div>
  )
}

PageForgotPassword.getLayout = getLayoutWithHeader
export default PageForgotPassword
