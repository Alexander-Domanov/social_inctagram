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
      {items.map((item, index) => (
        <div className="flex justify-between" key={index}>
          <URLUsernameForModal
            key={item.userId}
            avatartSrc={item.avatars?.thumbnail.url || null}
            userName={item.userName}
          />
          <FollowUnfollowButton
            key={index}
            followOrUnfollow={item.isFollowing}
            useFollowUnfollowUser={() =>
              useFollowUnfollowUser ? useFollowUnfollowUser(item.userId.toString()) : ''
            }
            isLoadingButton={isLoadingButton}
            isRefetching={isRefetching}
          />
        </div>
      ))}
    </>
  )
}
