import React from 'react'

import Head from 'next/head'

import { useWindowSize } from '@/common'
import { AccountLayout } from '@/components/account'
import { NavigateToProfile } from '@/components/account/navigate-to-profile/NavigateToProfile'
import { getGlobalLayout, getLayoutWithHeader } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { SettingsProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { NextPageWithLayout } from '@/pages/_app'

const editProfilePage: NextPageWithLayout = () => {
  const { width } = useWindowSize()
  const { t } = useTranslation()
  const headTile = (
    <Head>
      <title>{t.profile.settingsProfile.headTitle}</title>
    </Head>
  )

  return (
    <>
      {width &&
        width <= 360 &&
        getLayoutWithHeader(
          <>
            {headTile}
            <AccountLayout>
              <NavigateToProfile />
              <SettingsProfile />
            </AccountLayout>
          </>
        )}
      {width &&
        width > 360 &&
        getGlobalLayout(
          <>
            {headTile}
            <AccountLayout>
              <SettingsProfile />
            </AccountLayout>
          </>
        )}
    </>
  )
}

export default editProfilePage
