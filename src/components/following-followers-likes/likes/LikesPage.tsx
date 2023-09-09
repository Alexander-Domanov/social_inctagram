import React from 'react'

import { Likes, LikesLayout } from '@/components/following-followers-likes'
import { useGetLikes } from '@/services'
import { useLikesModalStore, useSearchStore, useUserStore } from '@/store'

export const LikesPage = () => {
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
  } = useGetLikes({
    postId: postId,
    search,
  })

  return (
    <LikesLayout isModalOpen={isLikesModal === 'likes'}>
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
