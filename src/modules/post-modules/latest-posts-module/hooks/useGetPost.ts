import { useQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getPost } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useGetPost = (
  postId: number | null,
  saveDescription?: (description: string) => void
) => {
  const client = {}
  const {
    data: post,
    isError,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['post', { postId }],
    onSuccess: data => {
      if (saveDescription) {
        saveDescription(data.description)
      }
    },
    queryFn: () => getPost(postId),
    enabled: !!postId,
    ...noRefetch,
    cacheTime: 0,
    staleTime: 0,
  })

  return { post, isError, isLoading, isFetching }
}
