import React from 'react'

import { useGetQueryUserNameUserId } from '@/common'
import { useOpenCloseModal } from '@/common/hooks/open-close-modal/useOpenCloseModal'
import {
  FollowUnfollowButton,
  ModalManagerFollowingFollowers,
} from '@/components/following-followers'
import {
  DuplicateUserNameDescription,
  InfoAboutProfilePage,
} from '@/components/info-about-profile-page'
import { useTranslation } from '@/components/translation'
import { useGetUserProfileData } from '@/modules/user-profile-module'
import { routes } from '@/routing/router'
import { useFollowingOrUnfollowingUser } from '@/services'
import { StateModalFollowingFollowersType } from '@/types'
import { Avatar, GlobalButton, Spinner } from '@/ui'
import { LatestPosts } from 'src/modules/post-modules/latest-posts-module'

export const UserProfilePage = () => {
  const { push, userIdQuery, userNameQuery } = useGetQueryUserNameUserId()
  const {
    userProfileData,
    userProfileAvatar,
    isLoadingUserProfile,
    isRefetchingUserProfile,
    refetchUserProfile,
  } = useGetUserProfileData(userNameQuery)
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    userIdQuery,
    refetch: refetchUserProfile,
  })

  const { t } = useTranslation()
  const { onCloseClick, modalOpen, setModalOpen } =
    useOpenCloseModal<StateModalFollowingFollowersType>({})
  const onRedirectToSetting = () => push(routes.sideBar.messenger)

  const followOrUnfollow = userProfileData.isFollowing
  const userId = userProfileData.id || null
  const handleToggleSubscriptionsCallBack = (userId: number | null) => {
    if (userId) {
      useFollowUnfollowUser(userId.toString())
    }
  }

  return (
    <div className="flex w-full">
      <main className="pr-16 grow">
        <div className="flex w-full text-light-100 gap-9">
          {(isLoadingUserProfile && (
            <div className="flex justify-center h-full w-full align-middle">
              <Spinner />
            </div>
          )) || (
            <>
              <Avatar src={userProfileAvatar} alt={'photo'} />
              <div className="flex w-full flex-col gap-5">
                <div className="flex flex-wrap justify-between">
                  <div className="font-bold">{userProfileData.userName}</div>
                  <div className="flex gap-3">
                    <FollowUnfollowButton
                      isRefetching={isRefetchingUserProfile}
                      handleToggleSubscriptionsCallBack={() =>
                        handleToggleSubscriptionsCallBack(userId)
                      }
                      followOrUnfollow={followOrUnfollow}
                      isLoadingButton={isLoadingButton}
                    />
                    <GlobalButton
                      className={'text-base bg-dark-300 font-semibold'}
                      type={'button'}
                      variant={'gray'}
                      callback={onRedirectToSetting}
                    >
                      <span>{t.userProfile.buttonMessage}</span>
                    </GlobalButton>
                  </div>
                  <InfoAboutProfilePage
                    t={t}
                    aboutMe={userProfileData.aboutMe}
                    publications={userProfileData.publicationsCount}
                    followers={userProfileData.followersCount}
                    following={userProfileData.followingCount}
                    setModalOpen={setModalOpen}
                  />
                </div>
              </div>
              <ModalManagerFollowingFollowers isModalOpen={modalOpen} onClose={onCloseClick} />
              <DuplicateUserNameDescription
                userName={userProfileData.userName}
                aboutMe={userProfileData.aboutMe}
              />
            </>
          )}
        </div>
        <LatestPosts userProfileId={userProfileData.id} />
      </main>
    </div>
  )
}
