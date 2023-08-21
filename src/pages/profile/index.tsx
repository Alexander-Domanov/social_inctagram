import React from 'react'

import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { ProfilePage } from 'src/modules/my-profile-modules/profile-page-module'

const MainPageProfile: NextPageWithLayout = () => {
  return (
    <div className="grow">
      <Head>
        <title>Profile</title>
      </Head>
      <ProfilePage />
    </div>
  )
}

MainPageProfile.getLayout = getGlobalLayout
export default MainPageProfile
