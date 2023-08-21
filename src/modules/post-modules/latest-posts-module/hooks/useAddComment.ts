import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addPostComment } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useAddComment = (postId: number | null, comment: string) => {
  const client = useQueryClient()

  const { isLoading, mutateAsync, data, isSuccess } = useMutation({
    mutationKey: ['add-comment'],
    mutationFn: () => addPostComment(postId, comment),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['comments', postId] })
    },
  })

  return { mutateAsync, data, isLoading, isSuccess }
}
