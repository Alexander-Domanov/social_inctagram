import { useQueryClient, useMutation } from '@tanstack/react-query'

import {
  changePostCommentLikeStatus,
  LikeStatus,
} from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useChangePostCommentLikeStatus = (
  postId: number | null,
  commentId: number,
  likeStatus: LikeStatus
) => {
  const client = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationKey: ['post-comment-like-status'],
    mutationFn: () => changePostCommentLikeStatus(postId, commentId, likeStatus),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['comments', { postId }] })
    },
  })

  return { isLoading, mutate }
}
