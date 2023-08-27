import React, { useState } from 'react'

import { useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowingUsers } from '@/components/following-followers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { ModalWithContent } from '@/components/modals'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useFollowingOrUnfollowingUser, userGetFollowings } from '@/services'
import { useMeQuery } from '@/services/hookMe'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'
import {useTranslation} from "@/components/translation";

export const Following = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const { search, searchInput, setSearchInput } = useSearch()
  const { data } = useMeQuery()
  const { t } = useTranslation()
  const myUserName = data?.data.userName as string | null
  const {
    followingData,
    refetchFollowing,
    isRefetchingFollowing,
    hasNextPageFollowing,
    isFetchNextPageFollowing,
    isSuccessFollowing,
    fetchNextPageFollowing,
  } = userGetFollowings({
    userName: myUserName,
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
    <ModalWithContent
      size="medium"
      isOpen={isModalOpen}
      onClose={onClose}
      title={t.profile.profilePage.following}
    >
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={t.search.searchInput}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
      </div>
      <ScrollArea className="w-full h-[400px]">
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
      </ScrollArea>
    </ModalWithContent>
  )
}
