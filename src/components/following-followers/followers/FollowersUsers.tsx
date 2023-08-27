import React from 'react'

import {
  DeleteUserButton,
  FollowUnfollowButton,
  URLUsernameForModal,
} from '@/components/following-followers'
import { FollowingsFollowersType, FollowUnfollowButtonPropsInterface } from '@/types'

type FollowingUsersProps = {
  items: FollowingsFollowersType[]
  deleteUserCallBack: (userId: number) => void
} & Omit<FollowUnfollowButtonPropsInterface, 'followOrUnfollow'>

export const FollowersUsers = ({
  items,
  useFollowUnfollowUser,
  isRefetching,
  isLoadingButton,
  deleteUserCallBack,
}: FollowingUsersProps) => {
  return (
    <>
      {items.map((user: FollowingsFollowersType, index) => (
        <div className="flex items-center align-middle justify-between" key={user.userId}>
          <URLUsernameForModal
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
          <DeleteUserButton userId={user.userId} deleteUserCallBack={deleteUserCallBack} />
        </div>
      ))}
    </>
  )
}
