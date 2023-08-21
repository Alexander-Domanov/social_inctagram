import { useQueryClient, useMutation } from '@tanstack/react-query'

import {
  changePostListStatus,
  LikeStatus,
} from '@/modules/post-modules/latest-posts/api/latest-posts-api'

export const useChangePostLikeStatus = (postId: number | null, likeStatus: LikeStatus) => {
  const client = useQueryClient()

  const { isLoading, mutate } = useMutation({
    mutationKey: ['like-status'],
    mutationFn: () => changePostListStatus(postId, likeStatus),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['post', postId] })
    },
  })

  return { isLoading, mutate }
}
