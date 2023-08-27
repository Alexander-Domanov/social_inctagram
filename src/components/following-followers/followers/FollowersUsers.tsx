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
  currentUserId: number | null
  isLoadingDeleteUser: boolean
  handleToggleSubscriptionsCallBack: (userId: number) => void
  currentDeleteUserId: number | null
} & Omit<FollowUnfollowButtonPropsInterface, 'isFollowing' | 'handleToggleSubscriptionsCallBack'>

export const FollowersUsers = ({
  items,
  currentUserId,
  currentDeleteUserId,
  isLoadingDeleteUser,
  handleToggleSubscriptionsCallBack,
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
          {user.isFollowing && (
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
          <DeleteUserButton
            disabled={user.userId === currentDeleteUserId && isLoadingDeleteUser}
            userId={user.userId}
            deleteUserCallBack={deleteUserCallBack}
          />
        </div>
      ))}
    </>
  )
}
