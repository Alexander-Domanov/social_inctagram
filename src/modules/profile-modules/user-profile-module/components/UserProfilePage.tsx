import React from 'react'

import { useTranslation } from '@/components/translation'
import { LatestPosts } from '@/modules/post-modules/latest-posts'
import {
  useFollowUnfollow,
  useGetQueryParamsUser,
  useGetUserProfileData,
} from '@/modules/profile-modules/user-profile-module'
import { handleToggleSubscriptionCallBack } from '@/modules/profile-modules/user-profile-module/custom/utils/handleToggleSubscriptionCallBack'
import { routes } from '@/routing/router'
import { Avatar, GlobalButton, Spinner } from '@/ui'

export const UserProfilePage = () => {
  const { push, userIdQuery, userNameQuery } = useGetQueryParamsUser()
  const { userProfileData, userProfileAvatar, isLoading, refetch, isFetching } =
    useGetUserProfileData(userNameQuery)
  const { followUnfollowUser, isLoading: isLoadingButton } = useFollowUnfollow(userIdQuery)

  const { t } = useTranslation()

  const onRedirectToSetting = () => push(routes.sideBar.messenger)

  const followOrUnfollow = userProfileData.isFollowing

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
                  <div className="flex gap-3">
                    <GlobalButton
                      className={'text-base bg-dark-300 font-semibold'}
                      type={'button'}
                      variant={followOrUnfollow ? 'transparent' : 'default'}
                      callback={() =>
                        handleToggleSubscriptionCallBack({ followUnfollowUser, refetch })
                      }
                      disabled={isLoadingButton}
                    >
                      {isLoadingButton ? (
                        <Spinner />
                      ) : (
                        <span>
                          {!isLoadingButton && !isLoading && followOrUnfollow
                            ? t.userProfile.buttonUnfollow
                            : t.userProfile.buttonFollow}
                        </span>
                      )}
                    </GlobalButton>
                    <GlobalButton
                      className={'text-base bg-dark-300 font-semibold'}
                      type={'button'}
                      variant={'grey'}
                      callback={onRedirectToSetting}
                    >
                      <span>{t.userProfile.buttonMessage}</span>
                    </GlobalButton>
                  </div>
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

        <LatestPosts userProfileId={userProfileData.id} />
      </main>
    </div>
  )
}
