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
      {items.map((item: FollowingsFollowersType, index) => (
        <div className="flex items-center align-middle justify-between" key={item.userId}>
          <URLUsernameForModal
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
          <DeleteUserButton userId={item.userId} deleteUserCallBack={deleteUserCallBack} />
        </div>
      ))}
    </>
  )
}
