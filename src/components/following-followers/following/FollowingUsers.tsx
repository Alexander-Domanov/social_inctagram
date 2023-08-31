import React from 'react'

import { useGetQueryUserNameUserId } from '@/common'
import { FollowingsFollowersType, FollowUnfollowButtonPropsInterface } from '@/types'
import { FollowUnfollowButton, URLUsernameForModal } from 'src/components/following-followers'

type FollowersUsersProps = {
  items: FollowingsFollowersType[]
  handleToggleSubscriptionsCallBack: (userId: number) => void
  currentUserId: number | null
} & Omit<FollowUnfollowButtonPropsInterface, 'isFollowing' | 'handleToggleSubscriptionsCallBack'>
export const FollowingUsers = ({
  items,
  currentUserId,
  handleToggleSubscriptionsCallBack,
  isRefetching,
  isLoadingButton,
}: FollowersUsersProps) => {
  const { userIdQuery } = useGetQueryUserNameUserId()

  return (
    <>
      {items.map((user, index) => (
        <div className="flex justify-between items-center" key={index}>
          <URLUsernameForModal
            key={user.userId}
            avatartSrc={user.avatars?.thumbnail.url || null}
            userName={user.userName}
          />
          {!userIdQuery && (
            <FollowUnfollowButton
              key={index}
              isFollowing={user.isFollowing}
              handleToggleSubscriptionsCallBack={() =>
                handleToggleSubscriptionsCallBack(user.userId)
              }
              isLoadingButton={currentUserId === user.userId && isLoadingButton}
              isRefetching={currentUserId === user.userId && isRefetching}
            />
          )}
        </div>
      ))}
    </>
  )
}
