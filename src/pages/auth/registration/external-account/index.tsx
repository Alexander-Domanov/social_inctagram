import React from 'react'

import Head from 'next/head'
import { useRouter } from 'next/router'

import { getLayoutWithHeader } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { ExternalAccount } from '@/modules/auth-modules/registraion-module'
import { NextPageWithLayout } from '@/pages/_app'

const ExternalAccountPage: NextPageWithLayout = () => {
  const {
    query: { code, email },
  } = useRouter()
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.auth.registration.externalAccount.titlePage}</title>
      </Head>
      <ExternalAccount code={code as string} email={email as string} />
    </>
  )
}

ExternalAccountPage.getLayout = getLayoutWithHeader
export default ExternalAccountPage
