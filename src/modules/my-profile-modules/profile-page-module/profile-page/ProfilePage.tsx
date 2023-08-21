import React from 'react'

import { useRouter } from 'next/router'

import { InfoAboutProfilePage } from '@/components/info-about-profile-page'
import { useTranslation } from '@/components/translation'
import { useGetProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { Avatar, GlobalButton } from '@/ui'
import { LatestPosts } from 'src/modules/post-modules/latest-posts-module'

export const ProfilePage = () => {
  const { push } = useRouter()
  const { profileData, profileAvatar } = useGetProfile()
  const { t } = useTranslation()
  const userName = profileData && profileData.userName
  const aboutMe = profileData && profileData.aboutMe
  const avatar = profileAvatar && profileAvatar
  const onRedirectToSetting = () => push('/profile/settings/edit')

  return (
    <div className="flex w-full">
      <main className="grow">
        <div className="flex xsm:gap-0 sm:gap-3 sm:items-center text-light-100 gap-9">
          <Avatar
            src={avatar}
            alt={'photo'}
            className={
              'xsm:w-[72px] xsm:mr-7 xsm:h-[72px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] '
            }
          />
          <div className="flex w-full flex-col gap-5">
            <div className="flex sm:gap-5 md:gap-5 lg:gap-5 flex-wrap justify-between">
              <div className="font-bold break-all xsm:hidden sm:hidden">{userName}</div>
              <GlobalButton
                className={'xsm:hidden text-base bg-dark-300 font-semibold'}
                type={'button'}
                variant={'grey'}
                callback={onRedirectToSetting}
              >
                <span className="font-semibold text-light-100 text-base leading-6">
                  {t.profile.profilePage.buttonProfileSettings}
                </span>
              </GlobalButton>
            </div>
            <InfoAboutProfilePage t={t} aboutMe={aboutMe} />
          </div>
        </div>
        <div className="sm:mt-4 xl:hidden lg:hidden exl:hidden mt-2 flex flex-col text-light-100 w-full">
          <div className="font-bold text-base ">{userName}</div>
          <div className="w-full mt-3">
            <p className="text-sm leading-6 font-normal break-all">{aboutMe}</p>
          </div>
        </div>
        <LatestPosts />
      </main>
    </div>
  )
}
