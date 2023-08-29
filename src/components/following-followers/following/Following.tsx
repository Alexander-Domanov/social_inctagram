import React, { useState } from 'react'

import { useGetQueryUserNameUserId, useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowingUsers } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { useFollowingOrUnfollowingUser, userGetFollowings } from '@/services'

export const Following = () => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const { search, searchInput, setSearchInput } = useSearch()
  const { userNameQuery } = useGetQueryUserNameUserId()

  const {
    followingData,
    refetchFollowing,
    isRefetchingFollowing,
    hasNextPageFollowing,
    isFetchNextPageFollowing,
    isSuccessFollowing,
    fetchNextPageFollowing,
  } = userGetFollowings({
    userName: userNameQuery,
    search,
  })
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    refetch: refetchFollowing,
  })
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageFollowing,
    fetchNextPage: fetchNextPageFollowing,
  })
  const handleToggleSubscriptionsCallBack = (userId: number) => {
    useFollowUnfollowUser(userId.toString())
    setCurrentUserId(userId)
  }

  return (
    <>
      {followingData?.pages
        ? followingData.pages.map((users, index) => (
            <FollowingUsers
              key={index}
              isRefetching={isRefetchingFollowing}
              isLoadingButton={isLoadingButton}
              handleToggleSubscriptionsCallBack={handleToggleSubscriptionsCallBack}
              items={users.items}
              currentUserId={currentUserId}
            />
          ))
        : 'Not found'}

      <RenderLoadingIndicator
        isSuccess={isSuccessFollowing}
        isFetchNextPage={isFetchNextPageFollowing}
        customRef={ref}
      />
    </>
  )
}
