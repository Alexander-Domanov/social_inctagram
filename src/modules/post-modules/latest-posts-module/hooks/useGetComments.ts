import { useInfiniteQuery } from '@tanstack/react-query'

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
    isInitialLoading,
  } = useInfiniteQuery({
    queryKey: ['post_comments', { postId }],
    queryFn: ({ pageParam = 1 }) => getPostComments(postId, pageParam),
    getNextPageParam: lastPage => {
      return lastPage.page * lastPage.pageSize < lastPage.totalCount ? lastPage.page + 1 : undefined
    },
    enabled: !!postId,
    cacheTime: 0,
    staleTime: 0,
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
    isInitialLoading,
  }
}
