import React from 'react'

import { useGetQueryUserNameUserId, useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowersUsers } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { ModalWithContent } from '@/components/modals'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useDeleteFollower, useFollowingOrUnfollowingUser, useGetFollowers } from '@/services'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch, Spinner } from '@/ui'

export const Followers = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { userNameQuery } = useGetQueryUserNameUserId()
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

  const { useDeleteFollowerUser, isLoading } = useDeleteFollower({ refetch: refetchFollowers })
  const deleteUserCallBack = (userId: number) => {
    useDeleteFollowerUser(userId)
  }
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageFollowers,
    fetchNextPage: fetchNextPageFollowers,
  })

  return (
    <ModalWithContent size="medium" isOpen={isModalOpen} onClose={onClose} title={'Followers'}>
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={'Search'}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
      </div>
      <ScrollArea className="max-w-full h-[400px]">
        {dataFollowersItems?.pages
          ? dataFollowersItems.pages.map(
              (users, index) =>
                users.items && (
                  <FollowersUsers
                    key={index}
                    isRefetching={isRefetchingFollowers}
                    isLoadingButton={isLoadingButton}
                    useFollowUnfollowUser={useFollowUnfollowUser}
                    items={users.items}
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
      </ScrollArea>
    </ModalWithContent>
  )
}
