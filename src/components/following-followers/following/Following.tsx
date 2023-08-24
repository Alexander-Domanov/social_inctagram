import React from 'react'

import { useRouter } from 'next/router'

import { useSearch } from '@/common/hooks/useSearch'
import { FollowingUsers } from '@/components/following-followers'
import { ModalWithContent } from '@/components/modals'
import { ScrollArea } from '@/components/ui/scroll-area'
import { userGetFollowings } from '@/services/hooks/following-followers/userGetFollowings'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'

export const Following = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { query } = useRouter()
  const queryUserName = query.userName ? query.userName : ''
  const { data } = userGetFollowings({ userName: queryUserName, search })

  return (
    <ModalWithContent size="medium" isOpen={isModalOpen} onClose={onClose} title={'Followings'}>
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={'Search'}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
      </div>
      <ScrollArea className="max-w-full h-[400px]">
        {data?.items && <FollowingUsers items={data.items} />}
      </ScrollArea>
    </ModalWithContent>
  )
}
