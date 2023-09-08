import React, { useState } from 'react'

import { useGetQueryUserNameUserId, useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useDeleteFollower, useFollowingOrUnfollowingUser, useGetFollowers } from '@/services'
import { useSearchStore } from '@/store'
import { Spinner } from '@/ui'
import { FollowersUsers } from 'src/components/following-followers-likes'

export const Followers = () => {
  const { userNameQuery } = useGetQueryUserNameUserId()
  const { search } = useSearchStore()
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const [currentDeleteUserId, setCurrentDeleteUserId] = useState<number | null>(null)
  const [textModal, setTextModal] = useState<string | null>(null)

  const {
    dataFollowersItems,
    refetchFollowers,
    isRefetchingFollowers,
    isSuccessFollowers,
    fetchNextPageFollowers,
    isFetchNextPageFollowers,
    hasNextPageFollowers,
    isLoadingFollowers,
  } = useGetFollowers({
    userName: userNameQuery,
    search,
  })
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    refetch: refetchFollowers,
    userId: currentUserId,
  })

  const { useDeleteFollowerUser, isLoadingDeleteUser } = useDeleteFollower({
    refetch: refetchFollowers,
  })
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageFollowers,
    fetchNextPage: fetchNextPageFollowers,
  })
  const handleToggleSubscriptionsCallBack = ({ userId }: { userId: number }) => {
    useFollowUnfollowUser()
    setCurrentUserId(userId)
  }
  const deleteUserCallBack = () => {
    if (currentDeleteUserId) {
      useDeleteFollowerUser(currentDeleteUserId)
    }
  }

  return (
    <>
      {!isLoadingFollowers ? (
        <>
          {dataFollowersItems?.pages ? (
            dataFollowersItems.pages.map(
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
                    textModal={textModal}
                    setTextModal={setTextModal}
                  />
                )
            )
          ) : (
            <NotFoundComponent message={'Not Found'} />
          )}
          <RenderLoadingIndicator
            isFetchNextPage={isFetchNextPageFollowers}
            isSuccess={isSuccessFollowers}
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
