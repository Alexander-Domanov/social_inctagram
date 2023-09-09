import React from 'react'

import { twMerge } from 'tailwind-merge'

import { useTranslation } from '@/components/translation'
import { FollowUnfollowButtonPropsInterface } from '@/types'
import { GlobalButton, Spinner } from '@/ui'

export const FollowUnfollowButton = ({
  handleToggleSubscriptionsCallBack,
  isLoadingButton,
  isRefetching,
  isFollowing,
  className,
}: FollowUnfollowButtonPropsInterface) => {
  const { t } = useTranslation()

  console.log(isFollowing)

  return (
    <GlobalButton
      className={twMerge('text-base mr-10 h-9 bg-dark-300 font-semibold', className)}
      type={'button'}
      variant={isFollowing ? 'transparent' : 'default'}
      callback={() => handleToggleSubscriptionsCallBack()}
      disabled={isLoadingButton}
    >
      {isRefetching ? (
        <Spinner />
      ) : (
        <span className="my-1.5 mx-6">
          {isFollowing ? t.userProfile.buttonUnfollow : t.userProfile.buttonFollow}
        </span>
      )}
    </GlobalButton>
  )
}
