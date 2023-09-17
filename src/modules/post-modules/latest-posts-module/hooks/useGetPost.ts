import { useQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getPost } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { usePutPostAddView } from '@/services/hooks/posts/usePutPostAddView'

export const useGetPost = (
  postId: number | null,
  saveDescription?: (description: string) => void
) => {
  const { useAddView } = usePutPostAddView()
  const {
    data: post,
    isError,
    isLoading,
    isFetching,
  } = useQuery({
    queryKey: ['post', { postId }],
    onSuccess: data => {
      if (postId) {
        useAddView(postId)
      }
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
