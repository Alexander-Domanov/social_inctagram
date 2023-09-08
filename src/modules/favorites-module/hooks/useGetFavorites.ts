import { useInfiniteQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getFavorites } from '@/modules/favorites-module/api/favorites-api'
import { useMeQuery } from '@/services/hookMe'

export const useGetFavorites = () => {
  const { data: me } = useMeQuery()

  const {
    data: favorites,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useInfiniteQuery({
    queryKey: ['favorites'],
    queryFn: ({ pageParam = 0 }) => getFavorites(me?.data.userName, pageParam),
    getNextPageParam: lastPage => {
      return lastPage.nextCursor ? lastPage.nextCursor : null
    },
    enabled: !!me?.data.userName,
    ...noRefetch,
    refetchOnMount: 'always',
  })

  return { favorites, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, isSuccess }
}
