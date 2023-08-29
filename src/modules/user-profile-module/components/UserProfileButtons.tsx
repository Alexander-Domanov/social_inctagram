import React from 'react'

import { FollowUnfollowButton } from '@/components/following-followers'
import { useTranslation } from '@/components/translation'
import { GlobalButton } from '@/ui'

type UserProfileButtonsType = {
  isRefetchingUserProfile: boolean
  handleToggleSubscriptionsCallBack: () => void
  isFollowing: boolean
  isLoadingButton: boolean
  onRedirectToSetting: () => void
  hideSubscriptionButtons: boolean
}

export const UserProfileButtons = ({
  isRefetchingUserProfile,
  handleToggleSubscriptionsCallBack,
  isFollowing,
  isLoadingButton,
  onRedirectToSetting,
  hideSubscriptionButtons,
}: UserProfileButtonsType) => {
  const { t } = useTranslation()

  return (
    <>
      {hideSubscriptionButtons && (
        <FollowUnfollowButton
          isRefetching={isRefetchingUserProfile}
          handleToggleSubscriptionsCallBack={() => handleToggleSubscriptionsCallBack()}
          isFollowing={isFollowing}
          isLoadingButton={isLoadingButton}
          className={'xsm:w-full xsm:text-sm leading-6 sm:w-full w-[160px]'}
        />
      )}
      <GlobalButton
        className={
          'xsm:text-sm xsm:w-full sm:w-full  text-base leading-6 w-[250px] bg-dark-300 text-light-100 font-semibold'
        }
        type={'button'}
        variant={'gray'}
        callback={onRedirectToSetting}
      >
        <span>{t.userProfile.buttonMessage}</span>
      </GlobalButton>
    </>
  )
}
