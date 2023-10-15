import React from 'react'

import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useUserStore } from '@/store'
import { FollowingsFollowersLikesType, FollowUnfollowButtonPropsInterface } from '@/types'
import { FollowUnfollowButton, URLUsernameForModal } from 'src/components/following-followers-likes'

type FollowersUsersProps = {
  items: FollowingsFollowersLikesType[]
  handleToggleSubscriptionsCallBack: (userId: number) => void
  currentUserId: number | null
} & Omit<FollowUnfollowButtonPropsInterface, 'isFollowing' | 'handleToggleSubscriptionsCallBack'>
export const LikesUsers = ({
  items,
  currentUserId,
  handleToggleSubscriptionsCallBack,
  isRefetching,
  isLoadingButton,
}: FollowersUsersProps) => {
  const { userName } = useUserStore()

  return (
    <>
      {items.length > 0 ? (
        items.map((user, index) => (
          <div className="flex justify-between items-center" key={index}>
            <div className="flex p-4 ">
              <URLUsernameForModal
                avatartSrc={user.avatars?.thumbnail.url || null}
                userName={user.userName}
                className={'w-[150px]'}
              />
            </div>
            {userName !== user.userName && (
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
        ))
      ) : (
        <NotFoundComponent message={'Not Found'} />
      )}
    </>
  )
}
