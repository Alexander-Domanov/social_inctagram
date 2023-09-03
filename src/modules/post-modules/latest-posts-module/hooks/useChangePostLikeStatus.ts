import { useQueryClient, useMutation } from '@tanstack/react-query'

import {
  changePostLikeStatus,
  LikeStatus,
} from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useChangePostLikeStatus = (postId: number | null, likeStatus: LikeStatus) => {
  const client = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationKey: ['post-like-status'],
    mutationFn: () => changePostLikeStatus(postId, likeStatus),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['post', { postId }] })
      client.invalidateQueries({ queryKey: ['publications'] })
    },
  })

  return { isLoading, mutate }
}
