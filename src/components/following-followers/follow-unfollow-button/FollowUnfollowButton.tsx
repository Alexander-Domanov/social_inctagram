import React from 'react'

import { AxiosResponse } from 'axios'
import { UseMutateFunction } from 'react-query'

import { handleToggleSubscriptionCallBack } from '@/common'
import { useTranslation } from '@/components/translation'
import { GlobalButton, Spinner } from '@/ui'

export interface FollowUnfollowButtonPropsInterface {
  useFollowUnfollowUser: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    string | undefined,
    unknown
  >
  isLoadingButton: boolean
  isRefetching: boolean
  followOrUnfollow: boolean
}

export const FollowUnfollowButton = ({
  useFollowUnfollowUser,
  isLoadingButton,
  isRefetching,
  followOrUnfollow,
}: FollowUnfollowButtonPropsInterface) => {
  const { t } = useTranslation()

  return (
    <GlobalButton
      className={'text-base bg-dark-300 font-semibold'}
      type={'button'}
      variant={followOrUnfollow ? 'transparent' : 'default'}
      callback={() => handleToggleSubscriptionCallBack({ useFollowUnfollowUser })}
      disabled={isLoadingButton}
    >
      {isRefetching ? (
        <Spinner />
      ) : (
        <span>{followOrUnfollow ? t.userProfile.buttonUnfollow : t.userProfile.buttonFollow}</span>
      )}
    </GlobalButton>
  )
}
