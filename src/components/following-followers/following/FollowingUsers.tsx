import React from 'react'

import { FollowUnfollowButton, URLUsernameForModal } from '@/components/following-followers'
import { FollowingsFollowersType, FollowUnfollowButtonPropsInterface } from '@/types'

type FollowersUsersProps = {
  items: FollowingsFollowersType[]
} & Omit<FollowUnfollowButtonPropsInterface, 'followOrUnfollow'>
export const FollowingUsers = ({
  items,
  useFollowUnfollowUser,
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
            useFollowUnfollowUser={() =>
              useFollowUnfollowUser ? useFollowUnfollowUser(user.userId.toString()) : ''
            }
            isLoadingButton={isLoadingButton}
            isRefetching={isRefetching}
          />
        </div>
      ))}
    </>
  )
}
