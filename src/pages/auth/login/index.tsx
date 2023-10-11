import { memo } from 'react'

import Head from 'next/head'

import { getLayoutWithHeader } from '@/components/layout/LayoutWithHeader/LayoutWithHeader'
import { useTranslation } from '@/components/translation'
import { Login } from '@/modules/auth-modules/login-module'
import { NextPageWithLayout } from '@/pages/_app'

interface ILogin {}

const LoginPage: NextPageWithLayout<ILogin> = memo(({}) => {
  const { t } = useTranslation()

  return (
    <div>
      <Head>
        <title>{t.auth.login.title}</title>
      </Head>
      <Login />
    </div>
  )
})

LoginPage.getLayout = getLayoutWithHeader
export default LoginPage
