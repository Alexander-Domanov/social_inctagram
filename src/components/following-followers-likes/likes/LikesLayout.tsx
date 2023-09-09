import React, { PropsWithChildren } from 'react'

import { NextPage } from 'next'

import { SearchLayout } from '@/components/layout'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useLikesModalStore, useUserStore } from '@/store'

export const LikesLayout: NextPage<PropsWithChildren> = ({ children }) => {
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
        <ScrollArea className="w-full h-[425px]">{children}</ScrollArea>
      </SearchLayout>
    </ModalWithContent>
  )
}
