import { useInfiniteQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getPosts } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useGetLatestPosts = ({
  userId,
  userName,
}: {
  userId: number | undefined
  userName: string | string[]
}) => {
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
    queryKey: ['posts', `${userName}_${userId}`],
    queryFn: ({ pageParam = 1 }) => getPosts({ userId, page: pageParam }),
    getNextPageParam: (lastPage, _allPages) => {
      return lastPage.page * lastPage.pageSize < lastPage.totalCount ? lastPage.page + 1 : undefined
    },
    enabled: !!userId,
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
