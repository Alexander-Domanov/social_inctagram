import React from 'react'

import { useRouter } from 'next/router'

import { useTranslation } from '@/components/translation'
import { routes } from '@/routing/router'
import { GlobalButton } from '@/ui'
import { FollowUnfollowButton } from 'src/components/following-followers'

type UserProfileButtonsType = {
  isRefetchingUserProfile: boolean
  handleToggleSubscriptionsCallBack: () => void
  isFollowing: boolean
  isLoadingButton: boolean
  hideSubscriptionButtons: boolean
}

export const UserProfileButtons = ({
  isRefetchingUserProfile,
  handleToggleSubscriptionsCallBack,
  isFollowing,
  isLoadingButton,
  hideSubscriptionButtons,
}: UserProfileButtonsType) => {
  const { t } = useTranslation()
  const { push } = useRouter()
  const onRedirectToSetting = () => push('/profile/settings/edit')
  const onRedirectToMessage = () => push(routes.sideBar.messenger)

  return (
    <>
      {hideSubscriptionButtons ? (
        <>
          <FollowUnfollowButton
            isRefetching={isRefetchingUserProfile}
            handleToggleSubscriptionsCallBack={() => handleToggleSubscriptionsCallBack()}
            isFollowing={isFollowing}
            isLoadingButton={isLoadingButton}
            className={'xsm:w-full xsm:text-sm leading-6 sm:w-full w-[160px]'}
          />
          <GlobalButton
            className={
              'xsm:text-sm xsm:w-full sm:w-full  text-base leading-6 w-[250px] bg-dark-300 text-light-100 font-semibold'
            }
            type={'button'}
            variant={'gray'}
            callback={onRedirectToMessage}
          >
            <span>{t.userProfile.buttonMessage}</span>
          </GlobalButton>
        </>
      ) : (
        <GlobalButton
          className={'xsm:hidden text-base bg-dark-300 font-semibold'}
          type={'button'}
          variant={'gray'}
          callback={onRedirectToSetting}
        >
          <span className="font-semibold text-light-100 text-base leading-6">
            {t.profile.profilePage.buttonProfileSettings}
          </span>
        </GlobalButton>
      )}
    </>
  )
}
