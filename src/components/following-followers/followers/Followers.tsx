import React from 'react'

import { useGetQueryUserNameUserId } from '@/common'
import { useSearch } from '@/common/hooks/useSearch'
import { FollowersUsers } from '@/components/following-followers/followers/FollowersUsers'
import { ModalWithContent } from '@/components/modals'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useFollowUnfollow, useGetFollowers } from '@/services'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'

export const Followers = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { userNameQuery } = useGetQueryUserNameUserId()
  const { dataFollowersItems, refetchFollowers, isRefetchingFollowers } = useGetFollowers({
    userName: userNameQuery,
    search,
  })
  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowUnfollow({
    refetch: refetchFollowers,
  })

  console.log(dataFollowersItems)

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
        {dataFollowersItems?.items && (
          <FollowersUsers
            isRefetching={isRefetchingFollowers}
            isLoadingButton={isLoadingButton}
            useFollowUnfollowUser={useFollowUnfollowUser}
            items={dataFollowersItems.items}
          />
        )}
      </ScrollArea>
    </ModalWithContent>
  )
}
