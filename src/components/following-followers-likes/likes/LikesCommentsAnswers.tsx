import React, { useState } from 'react'

import { useInViewScrollEffect } from '@/common'
import { LikesUsers } from '@/components/following-followers-likes'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { NotFoundComponent } from '@/components/not-found/NotFound'
import { useFollowingOrUnfollowingUser } from '@/services'
import { useGetCommentsAnswersLikes } from '@/services/hooks/likes/useGetCommentsAnswerLikes'
import { useModalsStore, useSearchStore, useUserStore } from '@/store'
import { Spinner } from '@/ui'

export const LikesCommentsAnswers = () => {
  const [currentUserId, setCurrentUserId] = useState<number | null>(null)
  const { search } = useSearchStore()
  const { answerId, commentId } = useUserStore()
  const postId = useModalsStore(state => state.postModal.postId)
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
    answerId: answerId,
    commentId: commentId,
    search,
  })

  const { useFollowUnfollowUser, isLoading: isLoadingButton } = useFollowingOrUnfollowingUser({
    userId: currentUserId,
  })

  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageLikes,
    fetchNextPage: fetchNextPageLikes,
  })
  const handleToggleSubscriptionsCallBack = (userId: number) => {
    setCurrentUserId(userId)
    useFollowUnfollowUser()
  }

  return (
    <>
      {!isLoadingLikes ? (
        <>
          {likesData?.pages ? (
            likesData.pages.map((users, index) => (
              <LikesUsers
                key={index}
                isRefetching={isRefetchingLikes}
                isLoadingButton={isLoadingButton}
                handleToggleSubscriptionsCallBack={handleToggleSubscriptionsCallBack}
                items={users.items}
                currentUserId={currentUserId}
              />
            ))
          ) : (
            <NotFoundComponent message={'Not Found'} />
          )}
          <RenderLoadingIndicator
            isSuccess={isSuccessLikes}
            isFetchNextPage={isFetchingNextPageLikes}
            customRef={ref}
          />
        </>
      ) : (
        <div className="absolute h-full w-full flex justify-center items-center">
          <Spinner />
        </div>
      )}
    </>
  )
}
