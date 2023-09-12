import React from 'react'

import { LikesCommentsAnswers, LikesLayout } from '@/components/following-followers-likes'
import { useLikesModalStore } from '@/store'

export const LikesCommentsAnswersPage = () => {
  const { isLikesModal } = useLikesModalStore()

  return (
    <LikesLayout isModalOpen={isLikesModal === 'commentAnswerLikes'}>
      <LikesCommentsAnswers />
    </LikesLayout>
  )
}
