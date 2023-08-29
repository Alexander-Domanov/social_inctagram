import React, { useState } from 'react'

import { useGetQueryUserNameUserId, useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowersUsers } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useDeleteFollower, useFollowingOrUnfollowingUser, useGetFollowers } from '@/services'
import { useUserStore } from '@/store'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'

export const Followers = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { userNameQuery } = useGetQueryUserNameUserId()
  const { followersCount } = useUserStore()
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const [currentDeleteUserId, setCurrentDeleteUserId] = useState<number | null>(null)
  const { t } = useTranslation()
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
    <ModalWithContent
      size="medium"
      isOpen={isModalOpen}
      onClose={onClose}
      title={`${followersCount} ${t.profile.profilePage.followers}`}
    >
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={t.search.searchInput}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
      </div>
      <ScrollArea className="max-w-full h-[425px]">
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
      </ScrollArea>
    </ModalWithContent>
  )
}
