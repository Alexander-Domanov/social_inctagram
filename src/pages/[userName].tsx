import React from 'react'

import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { UserProfilePage } from '@/modules/profile-modules/user-profile-module'
import { NextPageWithLayout } from '@/pages/_app'

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
