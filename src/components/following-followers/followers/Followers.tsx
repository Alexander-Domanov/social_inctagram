import React, { useState } from 'react'

import { useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowersUsers } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useDeleteFollower, useFollowingOrUnfollowingUser, useGetFollowers } from '@/services'
import { useMeQuery } from '@/services/hookMe'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'

export const Followers = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { data } = useMeQuery()
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const [currentDeleteUserId, setCurrentDeleteUserId] = useState<number | null>(null)
  const { t } = useTranslation()
  const myUserName = data?.data.userName as string | null
  const {
    dataFollowersItems,
    refetchFollowers,
    isRefetchingFollowers,
    isSuccessFollowers,
    fetchNextPageFollowers,
    isFetchNextPageFollowers,
    hasNextPageFollowers,
  } = useGetFollowers({
    userName: myUserName,
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
  const deleteUserCallBack = (userId: number) => {
    useDeleteFollowerUser(userId)
    setCurrentDeleteUserId(userId)
  }

  return (
    <ModalWithContent
      size="medium"
      isOpen={isModalOpen}
      onClose={onClose}
      title={t.profile.profilePage.followers}
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
                    deleteUserCallBack={deleteUserCallBack}
                    currentDeleteUserId={currentDeleteUserId}
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
