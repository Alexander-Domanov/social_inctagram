import React from 'react'

import Head from 'next/head'

import { getLayoutWithHeader } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { Recovery } from '@/modules/auth-modules/password-recovery-module'
import { NextPageWithLayout } from '@/pages/_app'

const PageRecovery: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t.auth.recovery.headTitle}</title>
      </Head>
      <Recovery />
    </div>
  )
}

PageRecovery.getLayout = getLayoutWithHeader
export default PageRecovery
