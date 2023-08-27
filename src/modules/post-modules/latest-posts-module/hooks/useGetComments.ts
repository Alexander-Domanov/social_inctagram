import { useInfiniteQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getPostComments } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useGetComments = (postId: number | null) => {
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['comments', { postId }],
    queryFn: ({ pageParam = 1 }) => getPostComments(postId, pageParam),
    getNextPageParam: lastPage => {
      return lastPage.page * lastPage.pageSize < lastPage.totalCount ? lastPage.page + 1 : undefined
    },
    enabled: !!postId,
    ...noRefetch,
  })

  return {
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  }
}
