import React from 'react'

import { Following } from '@/components/following-followers-likes/following/Following'
import { SearchLayout } from '@/components/layout'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useUserStore } from '@/store'
import { FollowingFollowersComponentsType } from '@/types'

export const FollowingPage = ({ isModalOpen, onClose }: FollowingFollowersComponentsType) => {
  const { followingCount } = useUserStore()
  const { t } = useTranslation()

  return (
    <ModalWithContent
      size="medium"
      isOpen={isModalOpen}
      onClose={onClose}
      title={`${t.profile.profilePage.getCountFollowing(followingCount)}`}
    >
      <SearchLayout>
        <ScrollArea className="w-full h-[425px]">
          <Following />
        </ScrollArea>
      </SearchLayout>
    </ModalWithContent>
  )
}
