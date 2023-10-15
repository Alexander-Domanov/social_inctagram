import React from 'react'

import { Likes, LikesLayout } from '@/components/following-followers-likes'
import { useLikesModalStore } from '@/store'

export const LikesPage = () => {
  const { isLikesModal } = useLikesModalStore()

  return (
    <LikesLayout isModalOpen={isLikesModal === 'likes'}>
      <Likes />
    </LikesLayout>
  )
}
