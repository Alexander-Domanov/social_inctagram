import React from 'react'

import { useOpenCloseModal } from '@/common/hooks/open-close-modal/useOpenCloseModal'
import { useGetQueryUserNameUserId } from '@/common/hooks/use-get-query-userName-userId/useGetQueryParamsUser'
import { ModalManagerFollowingFollowers } from '@/components/following-followers'
import { FollowUnfollowButton } from '@/components/following-followers/follow-unfollow-button/FollowUnfollowButton'
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
  const { userProfileData, userProfileAvatar, isLoading, refetch, isRefetching } =
    useGetUserProfileData(userNameQuery)
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    userIdQuery,
    refetch,
  })

  const { t } = useTranslation()
  const { onCloseClick, modalOpen, setModalOpen } =
    useOpenCloseModal<StateModalFollowingFollowersType>({})
  const onRedirectToSetting = () => push(routes.sideBar.messenger)

  const followOrUnfollow = userProfileData.isFollowing

  return (
    <div className="flex w-full">
      <main className="pr-16 grow">
        <div className="flex w-full text-light-100 gap-9">
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
                  <div className="flex gap-3">
                    <FollowUnfollowButton
                      isRefetching={isRefetching}
                      useFollowUnfollowUser={useFollowUnfollowUser}
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
