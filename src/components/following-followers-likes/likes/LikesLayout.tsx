import React, { PropsWithChildren } from 'react'

import { NextPage } from 'next'

import { SearchLayout } from '@/components/layout'
import { ModalWithContent } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useLikesModalStore, useUserStore } from '@/store'

type LikesLayoutProps = {
  isModalOpen: boolean
}

export const LikesLayout: NextPage<PropsWithChildren & LikesLayoutProps> = ({
  children,
  isModalOpen,
}) => {
  const { likesCount } = useUserStore()
  const { t } = useTranslation()
  const { setLikesModal } = useLikesModalStore()

  return (
    <ModalWithContent
      size="medium"
      isOpen={isModalOpen}
      onClose={() => setLikesModal('')}
      title={`${t.likes.getCountTitleLikes(likesCount)}`}
    >
      <SearchLayout>
        <ScrollArea className="w-full h-[425px]">{children}</ScrollArea>
      </SearchLayout>
    </ModalWithContent>
  )
}
