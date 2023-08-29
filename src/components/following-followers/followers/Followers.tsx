import React, { useState } from 'react'

import { useGetQueryUserNameUserId, useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { useTranslation } from '@/components/translation'
import { useDeleteFollower, useFollowingOrUnfollowingUser, useGetFollowers } from '@/services'
import { useSearchStore, useUserStore } from '@/store'
import { FollowersUsers } from 'src/components/following-followers'

export const Followers = () => {
  const { userNameQuery } = useGetQueryUserNameUserId()
  const { search } = useSearchStore()
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const [currentDeleteUserId, setCurrentDeleteUserId] = useState<number | null>(null)

  const {
    dataFollowersItems,
    refetchFollowers,
    isRefetchingFollowers,
    isSuccessFollowers,
    fetchNextPageFollowers,
    isFetchNextPageFollowers,
    hasNextPageFollowers,
  } = useGetFollowers({
    userName: userNameQuery,
    search,
  })
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    refetch: refetchFollowers,
  })

  const { useDeleteFollowerUser, isLoadingDeleteUser } = useDeleteFollower({
    refetch: refetchFollowers,
  })
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageFollowers,
    fetchNextPage: fetchNextPageFollowers,
  })
  const handleToggleSubscriptionsCallBack = (userId: number) => {
    useFollowUnfollowUser(userId.toString())
    setCurrentUserId(userId)
  }
  const deleteUserCallBack = () => {
    if (currentDeleteUserId) {
      useDeleteFollowerUser(currentDeleteUserId)
    }
  }

  return (
    <>
      {dataFollowersItems?.pages
        ? dataFollowersItems.pages.map(
            (users, index) =>
              users.items && (
                <FollowersUsers
                  key={index}
                  isRefetching={isRefetchingFollowers}
                  isLoadingButton={isLoadingButton}
                  isLoadingDeleteUser={isLoadingDeleteUser}
                  handleToggleSubscriptionsCallBack={handleToggleSubscriptionsCallBack}
                  currentUserId={currentUserId}
                  items={users.items}
                  setCurrentDeleteUserId={setCurrentDeleteUserId}
                  currentDeleteUserId={currentDeleteUserId}
                  deleteUserCallBack={deleteUserCallBack}
                />
              )
          )
        : 'Not found'}
      <RenderLoadingIndicator
        isFetchNextPage={isFetchNextPageFollowers}
        isSuccess={isSuccessFollowers}
        customRef={ref}
      />
    </>
  )
}
