import React from 'react'

import { Likes, LikesLayout } from '@/components/following-followers-likes'
import { useGetCommentsAnswersLikes } from '@/services/hooks/likes/useGetCommentsAnswerLikes'
import { useLikesModalStore, useSearchStore, useUserStore } from '@/store'

export const LikesCommentsAnswersPage = () => {
  const { search } = useSearchStore()
  const { isLikesModal } = useLikesModalStore()
  const { postId } = useUserStore()
  const {
    likesData,
    isRefetchingLikes,
    hasNextPageLikes,
    isFetchingNextPageLikes,
    isSuccessLikes,
    fetchNextPageLikes,
    isLoadingLikes,
  } = useGetCommentsAnswersLikes({
    postId: postId,
    search,
    answerId: 0,
    commentId: 0,
  })

  return (
    <LikesLayout isModalOpen={isLikesModal === 'commentAnswerLikes'}>
      <Likes
        isLoadingLikes={isLoadingLikes}
        isRefetchingLikes={isRefetchingLikes}
        likesData={likesData}
        isSuccessLikes={isSuccessLikes}
        fetchNextPageLikes={fetchNextPageLikes}
        hasNextPageLikes={hasNextPageLikes}
        isFetchingNextPageLikes={isFetchingNextPageLikes}
      />
    </LikesLayout>
  )
}
