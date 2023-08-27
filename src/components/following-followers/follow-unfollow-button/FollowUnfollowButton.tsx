import React from 'react'

import { useTranslation } from '@/components/translation'
import { FollowUnfollowButtonPropsInterface } from '@/types'
import { GlobalButton, Spinner } from '@/ui'

export const FollowUnfollowButton = ({
  handleToggleSubscriptionsCallBack,
  isLoadingButton,
  isRefetching,
  followOrUnfollow,
}: FollowUnfollowButtonPropsInterface) => {
  const { t } = useTranslation()

  return (
    <GlobalButton
      className={'text-base mr-10 h-9 max-w-[140px] bg-dark-300 font-semibold'}
      type={'button'}
      variant={followOrUnfollow ? 'transparent' : 'default'}
      callback={() => handleToggleSubscriptionsCallBack()}
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
