import React from 'react'

import { useRouter } from 'next/router'

import { useInViewScrollEffect } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowingUsers } from '@/components/following-followers/following/FollowingUsers'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { ModalWithContent } from '@/components/modals'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useFollowingOrUnfollowingUser, userGetFollowings } from '@/services'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'

export const Following = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { query } = useRouter()
  const queryUserName = query.userName ? query.userName : ''
  const {
    followingData,
    refetchFollowing,
    isRefetchingFollowing,
    hasNextPageFollowing,
    isFetchNextPageFollowing,
    isSuccessFollowing,
    fetchNextPageFollowing,
  } = userGetFollowings({
    userName: queryUserName,
    search,
  })
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    refetch: refetchFollowing,
  })
  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageFollowing,
    fetchNextPage: fetchNextPageFollowing,
  })

  return (
    <ModalWithContent size="medium" isOpen={isModalOpen} onClose={onClose} title={'Following'}>
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={'Search'}
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
                useFollowUnfollowUser={useFollowUnfollowUser}
                items={users.items}
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
