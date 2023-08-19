import React from 'react'

import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/pages/_app'
import { UserProfilePage } from 'src/modules/user-profile-module'

const UserProfile: NextPageWithLayout = () => {
  return (
    <div className="grow">
      <Head>
        <title>User Profile</title>
      </Head>
      <UserProfilePage />
    </div>
  )
}

UserProfile.getLayout = getGlobalLayout
export default UserProfile
