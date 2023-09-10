import { useInfiniteQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getPosts } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useGetLatestPosts = ({ userName }: { userName: string | string[] | null }) => {
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
    queryKey: ['posts', `${userName}`],
    queryFn: ({ pageParam = 1 }) => getPosts({ userName, page: pageParam }),
    getNextPageParam: (lastPage, _allPages) => {
      return lastPage.page * lastPage.pageSize < lastPage.totalCount ? lastPage.page + 1 : undefined
    },
    enabled: !!userName,
    retry: 3,
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
  }
}
