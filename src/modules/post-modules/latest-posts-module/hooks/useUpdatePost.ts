import { useMutation } from '@tanstack/react-query'

import { updatePost } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useUpdatePost = () => {
  const { isLoading, mutate } = useMutation({
    mutationKey: ['update-post'],
    mutationFn: (variables: { postId: number | null; description: string }) =>
      updatePost(variables.postId, variables.description),
  })

  return { isLoading, mutate }
}
