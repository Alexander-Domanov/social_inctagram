import React from 'react'

import { LikesComments, LikesLayout } from '@/components/following-followers-likes'
import { useLikesModalStore } from '@/store'

export const LikesCommentsPage = () => {
  const { isLikesModal } = useLikesModalStore()

  return (
    <LikesLayout isModalOpen={isLikesModal === 'commentLikes'}>
      <LikesComments />
    </LikesLayout>
  )
}
