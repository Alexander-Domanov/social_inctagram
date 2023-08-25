import React from 'react'

import { handleToggleSubscriptionCallBack } from '@/common'
import { useTranslation } from '@/components/translation'
import { FollowUnfollowButtonPropsInterface } from '@/types'
import { GlobalButton, Spinner } from '@/ui'

export const FollowUnfollowButton = ({
  useFollowUnfollowUser,
  isLoadingButton,
  isRefetching,
  followOrUnfollow,
}: FollowUnfollowButtonPropsInterface) => {
  const { t } = useTranslation()

  return (
    <GlobalButton
      className={'text-base h-9 max-w-full bg-dark-300 font-semibold'}
      type={'button'}
      variant={followOrUnfollow ? 'transparent' : 'default'}
      callback={() => handleToggleSubscriptionCallBack({ useFollowUnfollowUser })}
      disabled={isLoadingButton}
    >
      {isRefetching ? (
        <Spinner />
      ) : (
        <span className="my-1.5 mx-6">
          {followOrUnfollow ? t.userProfile.buttonUnfollow : t.userProfile.buttonFollow}
        </span>
      )}
    </GlobalButton>
  )
}
