import React from 'react'

import Head from 'next/head'

import { getLayoutWithHeader } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { Register } from '@/modules/auth-modules/registraion-module'
import { NextPageWithLayout } from '@/pages/_app'

const PageRegistration: NextPageWithLayout = () => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t.auth.registration.title}</title>
      </Head>
      <Register />
    </div>
  )
}

PageRegistration.getLayout = getLayoutWithHeader
export default PageRegistration
