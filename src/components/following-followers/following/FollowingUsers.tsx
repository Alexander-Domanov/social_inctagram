import React from 'react'

import { FollowUnfollowButton, URLUsernameForModal } from '@/components/following-followers'
import { FollowingsFollowersType, FollowUnfollowButtonPropsInterface } from '@/types'

type FollowersUsersProps = {
  items: FollowingsFollowersType[]
  handleToggleSubscriptionsCallBack: (userId: number) => void
  currentUserId: number | null
} & Omit<
  FollowUnfollowButtonPropsInterface,
  'followOrUnfollow' | 'handleToggleSubscriptionsCallBack'
>
export const FollowingUsers = ({
  items,
  currentUserId,
  handleToggleSubscriptionsCallBack,
  isRefetching,
  isLoadingButton,
}: FollowersUsersProps) => {
  return (
    <>
      {items.map((user, index) => (
        <div className="flex justify-between" key={index}>
          <URLUsernameForModal
            key={user.userId}
            avatartSrc={user.avatars?.thumbnail.url || null}
            userName={user.userName}
          />
          <FollowUnfollowButton
            key={index}
            followOrUnfollow={user.isFollowing}
            handleToggleSubscriptionsCallBack={() => handleToggleSubscriptionsCallBack(user.userId)}
            isLoadingButton={currentUserId === user.userId && isLoadingButton}
            isRefetching={currentUserId === user.userId && isRefetching}
          />
        </div>
      ))}
    </>
  )
}
