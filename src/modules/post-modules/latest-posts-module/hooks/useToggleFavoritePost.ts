import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toggleFavoritePost } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useToggleFavoritePost = (postId: number | null) => {
  const client = useQueryClient()

  const { isLoading, mutate: toggleFavoritePostMutation } = useMutation({
    mutationKey: ['toggle-favorite-post'],
    mutationFn: () => toggleFavoritePost(postId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['post', { postId }] })
      client.invalidateQueries({ queryKey: ['favorites'] })
      client.invalidateQueries({ queryKey: ['publications'] })
    },
  })

  return { isLoading, toggleFavoritePostMutation }
}
