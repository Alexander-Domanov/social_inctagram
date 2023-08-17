import React from 'react'

import Image from 'next/image'
import { useRouter } from 'next/router'

import settings from '@/assets/icons/settings.svg'
import { useTranslation } from '@/components/translation'
import {
  useGetUserProfileData,
  userNameQueryType,
} from '@/modules/profile-modules/user-profile-module'
import { Avatar, GlobalButton, Spinner } from '@/ui'

export const UserProfilePage = () => {
  const { push, query } = useRouter()

  const userNameQuery: userNameQueryType = query.userName || ''

  const { userProfileData, userProfileAvatar, isLoading } = useGetUserProfileData(userNameQuery)
  const { t } = useTranslation()

  const onRedirectToSetting = () => push('/profile/settings/edit')

  return (
    <div className="flex w-full">
      <main className="pr-16 grow">
        <div className="flex text-light-100 gap-9">
          {(isLoading && (
            <div className="flex justify-center h-full w-full align-middle">
              <Spinner />
            </div>
          )) || (
            <>
              <Avatar src={userProfileAvatar} alt={'photo'} />
              <div className="flex w-full flex-col gap-5">
                <div className="flex flex-wrap justify-between">
                  <div className="font-bold">{userProfileData.userName}</div>
                  <GlobalButton
                    className={'md:px-3 text-base bg-dark-300 font-semibold'}
                    type={'button'}
                    variant={'grey'}
                    callback={onRedirectToSetting}
                  >
                    <span className={'md:hidden'}>
                      {t.profile.profilePage.buttonProfileSettings}
                    </span>
                    <Image
                      className={'md:visible invisible'}
                      src={settings}
                      alt={'settings'}
                      height={24}
                      width={24}
                    />
                  </GlobalButton>
                </div>
                <div className="flex gap-[72px] md:gap-[20px] flex-wrap">
                  <div className="text-sm">
                    <div className="font-bold">{userProfileData?.followingCount || 0}</div>
                    <span>{t.profile.profilePage.following}</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">{userProfileData?.followersCount || 0}</div>
                    <span>{t.profile.profilePage.followers}</span>
                  </div>
                  <div className="text-sm">
                    <div className="font-bold">{userProfileData?.publicationsCount || 0}</div>
                    <span>{t.profile.profilePage.Publications}</span>
                  </div>
                </div>
                <div>
                  <p className="text-base">{userProfileData?.aboutMe || 'No Description'}</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/*<LatestPosts />*/}
      </main>
    </div>
  )
}
