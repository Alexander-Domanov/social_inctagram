import React from 'react'

import { useGetQueryUserNameUserId } from '@/common'
import { useOpenCloseModal } from '@/common/hooks/open-close-modal/useOpenCloseModal'
import { ModalManagerFollowingFollowers } from '@/components/following-followers'
import {
  DuplicateUserNameDescription,
  InfoAboutProfilePage,
} from '@/components/info-about-profile-page'
import { useTranslation } from '@/components/translation'
import { SkeletonProfilePage } from '@/modules/my-profile-modules/profile-page-module'
import { useGetUserProfileData } from '@/modules/user-profile-module'
import { UserProfileButtons } from '@/modules/user-profile-module/components/UserProfileButtons'
import { routes } from '@/routing/router'
import { useFollowingOrUnfollowingUser } from '@/services'
import { StateModalFollowingFollowersType } from '@/types'
import { Avatar } from '@/ui'
import { LatestPosts } from 'src/modules/post-modules/latest-posts-module'

export const UserProfilePage = () => {
  const { push, userIdQuery, userNameQuery } = useGetQueryUserNameUserId()
  const {
    userProfileData,
    userProfileAvatar,
    isRefetchingUserProfile,
    refetchUserProfile,
    isLoadingUserProfile,
  } = useGetUserProfileData(userNameQuery)
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    userIdQuery,
    refetch: refetchUserProfile,
  })

  const { t } = useTranslation()
  const { onCloseClick, modalOpen, setModalOpen } =
    useOpenCloseModal<StateModalFollowingFollowersType>({})
  const onRedirectToSetting = () => push(routes.sideBar.messenger)

  const isFollowing = userProfileData.isFollowing
  const userId = userProfileData.id || null
  const handleToggleSubscriptionsCallBack = (userId: number | null) => {
    if (userId) {
      useFollowUnfollowUser(userId.toString())
    }
  }

  return (
    <div className="flex w-full">
      <main className="grow">
        {!isLoadingUserProfile ? (
          <>
            {' '}
            <div className="flex xsm:gap-0 sm:gap-3 sm:items-center text-light-100 gap-9">
              <Avatar
                src={userProfileAvatar}
                alt={'photo'}
                className={
                  'xsm:w-[72px] xsm:mr-7 xsm:h-[72px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px]'
                }
              />
              <div className="flex w-full flex-col gap-5">
                <div className="xsm:flex-col-reverse  sm:gap-5 md:gap-5 lg:gap-5 gap-5 w-full flex flex-wrap justify-between">
                  <div className="lg:flex-col lg:gap-5 w-full flex justify-between items-center">
                    <div className="font-bold flex w-full break-all xsm:hidden sm:hidden md:hidden">
                      {userProfileData.userName}
                    </div>
                    <div className="xsm:hidden sm:hidden md:flex-col flex w-full gap-3">
                      <UserProfileButtons
                        isFollowing={isFollowing}
                        onRedirectToSetting={onRedirectToSetting}
                        isRefetchingUserProfile={isRefetchingUserProfile}
                        isLoadingButton={isLoadingButton}
                        handleToggleSubscriptionsCallBack={() =>
                          handleToggleSubscriptionsCallBack(userId)
                        }
                      />
                    </div>
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
            </div>
            <ModalManagerFollowingFollowers isModalOpen={modalOpen} onClose={onCloseClick} />
            <DuplicateUserNameDescription
              userName={userProfileData.userName}
              aboutMe={userProfileData.aboutMe}
            />
            <div className="md:hidden lg:hidden xl:hidden exl:hidden flex w-full gap-3 flex-col">
              <UserProfileButtons
                isFollowing={isFollowing}
                onRedirectToSetting={onRedirectToSetting}
                isRefetchingUserProfile={isRefetchingUserProfile}
                isLoadingButton={isLoadingButton}
                handleToggleSubscriptionsCallBack={() => handleToggleSubscriptionsCallBack(userId)}
              />
            </div>
            <LatestPosts userProfileId={userProfileData.id} />
          </>
        ) : (
          <SkeletonProfilePage />
        )}
      </main>
    </div>
  )
}
