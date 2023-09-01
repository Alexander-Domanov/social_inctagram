import React, { useState } from 'react'

import { useGetQueryUserNameUserId, useInViewScrollEffect } from '@/common'
import { FollowingUsers } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useFollowingOrUnfollowingUser, userGetFollowings } from '@/services'
import { useSearchStore } from '@/store'
import { Spinner } from '@/ui'

export const Following = () => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const { search } = useSearchStore()
  const { userNameQuery } = useGetQueryUserNameUserId()

  const {
    followingData,
    refetchFollowing,
    isRefetchingFollowing,
    hasNextPageFollowing,
    isFetchNextPageFollowing,
    isSuccessFollowing,
    fetchNextPageFollowing,
    isLoadingFollowing,
  } = userGetFollowings({
    userName: userNameQuery,
    search,
  })
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    refetch: refetchFollowing,
    userId: currentUserId,
  })
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageFollowing,
    fetchNextPage: fetchNextPageFollowing,
  })
  const handleToggleSubscriptionsCallBack = (userId: number) => {
    setCurrentUserId(userId)
    useFollowUnfollowUser()
  }

  return (
    <>
      {!isLoadingFollowing ? (
        <>
          {followingData?.pages ? (
            followingData.pages.map((users, index) => (
              <FollowingUsers
                key={index}
                isRefetching={isRefetchingFollowing}
                isLoadingButton={isLoadingButton}
                handleToggleSubscriptionsCallBack={handleToggleSubscriptionsCallBack}
                items={users.items}
                currentUserId={currentUserId}
              />
            ))
          ) : (
            <NotFoundComponent message={'Not Found'} />
          )}
          <RenderLoadingIndicator
            isSuccess={isSuccessFollowing}
            isFetchNextPage={isFetchNextPageFollowing}
            customRef={ref}
          />
        </>
      ) : (
        <div className="absolute h-full w-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  )
}
