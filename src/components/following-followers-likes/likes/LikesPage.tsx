import React from 'react'

import { Likes } from '@/components/following-followers-likes'
import { SearchLayout } from '@/components/layout'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useLikesModalStore, useUserStore } from '@/store'

export const LikesPage = () => {
  const { likesCount } = useUserStore()
  const { t } = useTranslation()
  const { isLikesModal, setLikesModal } = useLikesModalStore()

  return (
    <ModalWithContent
      size="medium"
      isOpen={isLikesModal}
      onClose={() => setLikesModal(false)}
      title={`${t.likes.getCountTitleLikes(likesCount)}`}
    >
      <SearchLayout>
        <ScrollArea className="w-full h-[425px]">
          <Likes />
        </ScrollArea>
      </SearchLayout>
    </ModalWithContent>
  )
}
