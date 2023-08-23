import React from 'react'

import {
  DuplicateUserNameDescription,
  InfoAboutProfilePage,
} from '@/components/info-about-profile-page'
import { useTranslation } from '@/components/translation'
import {
  useFollowUnfollow,
  useGetQueryParamsUser,
  useGetUserProfileData,
} from '@/modules/user-profile-module'
import { handleToggleSubscriptionCallBack } from '@/modules/user-profile-module/custom/utils/handleToggleSubscriptionCallBack'
import { routes } from '@/routing/router'
import { Avatar, GlobalButton, Spinner } from '@/ui'
import { LatestPosts } from 'src/modules/post-modules/latest-posts-module'

export const UserProfilePage = () => {
  const { push, userIdQuery, userNameQuery } = useGetQueryParamsUser()
  const { userProfileData, userProfileAvatar, isLoading, refetch, isRefetching } =
    useGetUserProfileData(userNameQuery)
  const { followUnfollowUser, isLoading: isLoadingButton } = useFollowUnfollow({
    userIdQuery,
    refetch,
  })

  const { t } = useTranslation()

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
                    <GlobalButton
                      className={'text-base bg-dark-300 font-semibold'}
                      type={'button'}
                      variant={followOrUnfollow ? 'transparent' : 'default'}
                      callback={() => handleToggleSubscriptionCallBack({ followUnfollowUser })}
                      disabled={isLoadingButton}
                    >
                      {isRefetching ? (
                        <Spinner />
                      ) : (
                        <span>
                          {followOrUnfollow
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
                  <InfoAboutProfilePage t={t} aboutMe={userProfileData.aboutMe} />
                </div>
              </div>
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
