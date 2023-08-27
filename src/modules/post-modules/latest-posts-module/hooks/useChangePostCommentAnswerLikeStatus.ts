import { useQueryClient, useMutation } from '@tanstack/react-query'

import {
  changePostCommentAnswerLikeStatus,
  LikeStatus,
} from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useChangePostCommentAnswerLikeStatus = (
  postId: number | null,
  commentId: number,
  answerId: number,
  likeStatus: LikeStatus
) => {
  const client = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationKey: ['post-comment-answer-like-status'],
    mutationFn: () => changePostCommentAnswerLikeStatus(postId, commentId, answerId, likeStatus),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['answers', { postId, commentId }] })
    },
  })

  return { isLoading, mutate }
}
