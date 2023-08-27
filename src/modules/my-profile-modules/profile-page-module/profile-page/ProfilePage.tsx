import React from 'react'

import { useRouter } from 'next/router'

import { useOpenCloseModal } from '@/common/hooks/open-close-modal/useOpenCloseModal'
import { ModalManagerFollowingFollowers } from '@/components/following-followers'
import {
  DuplicateUserNameDescription,
  InfoAboutProfilePage,
} from '@/components/info-about-profile-page'
import { useTranslation } from '@/components/translation'
import {
  SkeletonProfilePage,
  useReplacePathnameQueryEffect,
} from '@/modules/my-profile-modules/profile-page-module'
import { useGetProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { StateModalFollowingFollowersType } from '@/types'
import { Avatar, GlobalButton } from '@/ui'
import { LatestPosts } from 'src/modules/post-modules/latest-posts-module'

export const ProfilePage = () => {
  const { push } = useRouter()
  const { profileData, profileAvatar, isFetchingProfileData } = useGetProfile()
  const { t } = useTranslation()
  const { onCloseClick, modalOpen, setModalOpen } =
    useOpenCloseModal<StateModalFollowingFollowersType>({})
  const userName = profileData && profileData.userName
  const aboutMe = profileData && profileData.aboutMe
  const avatar = profileAvatar && profileAvatar
  const followings = profileData && profileData.followings
  const followers = profileData && profileData.followers
  const publications = profileData && profileData.publications
  const onRedirectToSetting = () => push('/profile/settings/edit')

  useReplacePathnameQueryEffect(userName)

  return (
    <div className="flex w-full">
      <main className="grow">
        {!isFetchingProfileData ? (
          <>
            <div className="flex xsm:gap-0 sm:gap-3 sm:items-center text-light-100 gap-9">
              <Avatar
                src={avatar}
                alt={'photo'}
                className={
                  'xsm:w-[72px] xsm:mr-7 xsm:h-[72px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]'
                }
              />
              <div className="flex w-full flex-col gap-5">
                <div className="flex sm:gap-5 md:gap-5 lg:gap-5 flex-wrap justify-between">
                  <div className="font-bold break-all xsm:hidden sm:hidden md:hidden">
                    {userName}
                  </div>
                  <GlobalButton
                    className={'xsm:hidden text-base bg-dark-300 font-semibold'}
                    type={'button'}
                    variant={'gray'}
                    callback={onRedirectToSetting}
                  >
                    <span className="font-semibold text-light-100 text-base leading-6">
                      {t.profile.profilePage.buttonProfileSettings}
                    </span>
                  </GlobalButton>
                </div>
                <InfoAboutProfilePage
                  t={t}
                  aboutMe={aboutMe}
                  publications={publications}
                  following={followings}
                  followers={followers}
                  setModalOpen={setModalOpen}
                />
              </div>
            </div>
            <ModalManagerFollowingFollowers isModalOpen={modalOpen} onClose={onCloseClick} />
            <DuplicateUserNameDescription userName={userName} aboutMe={aboutMe} />
            <LatestPosts />
          </>
        ) : (
          <SkeletonProfilePage />
        )}
      </main>
    </div>
  )
}
