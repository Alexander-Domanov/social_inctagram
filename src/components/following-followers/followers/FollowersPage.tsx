import React, { useEffect } from 'react'

import { useSearch } from '@/common/hooks/useSearch'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useSearchStore, useUserStore } from '@/store'
import { FollowingFollowersComponentsType } from '@/types'
import { InputSearch } from '@/ui'
import { Followers } from 'src/components/following-followers'

export const FollowersPage = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { followersCount } = useUserStore()
  const { setSearch } = useSearchStore()
  const { t } = useTranslation()
  const { search, searchInput, setSearchInput } = useSearch()

  useEffect(() => {
    setSearch(search)
  }, [search])

  return (
    <ModalWithContent
      size="medium"
      isOpen={isModalOpen}
      onClose={onClose}
      title={`${t.profile.profilePage.getCountFollower(followersCount)}`}
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
        <Followers />
      </ScrollArea>
    </ModalWithContent>
  )
}
