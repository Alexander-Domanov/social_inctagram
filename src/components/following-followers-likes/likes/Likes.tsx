import React, { useState } from 'react'

import { InfiniteData } from '@tanstack/query-core/src/types'

import { useInViewScrollEffect } from '@/common'
import { LikesUsers } from '@/components/following-followers-likes'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useFollowingOrUnfollowingUser } from '@/services'
import { ItemsFollowingFollowersLikesType } from '@/types'
import { Spinner } from '@/ui'

type LikeType = {
  likesData: InfiniteData<ItemsFollowingFollowersLikesType> | undefined
  isRefetchingLikes: boolean
  hasNextPageLikes: boolean | undefined
  isFetchingNextPageLikes: boolean
  isSuccessLikes: boolean
  fetchNextPageLikes: () => void
  isLoadingLikes: boolean
}

export const Likes = ({
  likesData,
  isLoadingLikes,
  isSuccessLikes,
  fetchNextPageLikes,
  isRefetchingLikes,
  hasNextPageLikes,
  isFetchingNextPageLikes,
}: LikeType) => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)

  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    userId: currentUserId,
  })
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageLikes,
    fetchNextPage: fetchNextPageLikes,
  })
  const handleToggleSubscriptionsCallBack = (userId: number) => {
    setCurrentUserId(userId)
    useFollowUnfollowUser()
  }

  return (
    <>
      {!isLoadingLikes ? (
        <>
          {likesData?.pages ? (
            likesData.pages.map((users, index) => (
              <LikesUsers
                key={index}
                isRefetching={isRefetchingLikes}
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
            isSuccess={isSuccessLikes}
            isFetchNextPage={isFetchingNextPageLikes}
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
