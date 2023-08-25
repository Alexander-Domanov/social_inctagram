import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getUserFoundData } from 'src/modules/search-module'

export const useUsersGetSearchData = (search: string) => {
  const { data, isLoading, isSuccess, error, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['getUserFound', search],
      queryFn: ({ pageParam = 0 }) => getUserFoundData({ search, pageParam }),
      getNextPageParam: (lastPage, _allPages) => {
        if (lastPage.nextCursor) {
          return lastPage.nextCursor
        } else {
          return null
        }
      },
      onError: (err: Error) => toast.error(err.message),
      enabled: Boolean(search),
    })

  return {
    data,
    isLoading,
    isSuccess,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  }
}
