import React from 'react'

import { Likes, LikesLayout } from '@/components/following-followers-likes'
import { useGetCommentsLikes } from '@/services/hooks/likes/useGetCommentsLikes'
import { useLikesModalStore, useSearchStore, useUserStore } from '@/store'

export const LikesCommentsPage = () => {
  const { search } = useSearchStore()
  const { postId, commentId } = useUserStore()
  const { isLikesModal } = useLikesModalStore()
  const {
    likesData,
    isRefetchingLikes,
    hasNextPageLikes,
    isFetchingNextPageLikes,
    isSuccessLikes,
    fetchNextPageLikes,
    isLoadingLikes,
  } = useGetCommentsLikes({
    postId: postId,
    search,
    commentId: commentId,
  })

  return (
    <LikesLayout isModalOpen={isLikesModal === 'commentLikes'}>
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
