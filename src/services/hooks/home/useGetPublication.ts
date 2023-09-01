import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getPublicationsApi } from '@/services'

export const useGetPublication = () => {
  const {
    data: dataPublications,
    refetch: refetchPublications,
    isRefetching: isRefetchPublications,
    isSuccess: isSuccessPublications,
    hasNextPage: hasNextPagePublications,
    isFetchingNextPage: isFetchNextPublications,
    fetchNextPage: fetchNextPublications,
    isLoading: isLoadingPublications,
  } = useInfiniteQuery(['publications'], ({ pageParam = 0 }) => getPublicationsApi({ pageParam }), {
    getNextPageParam: (lastPage, _allPages) => {
      if (lastPage.nextCursor) {
        return lastPage.nextCursor
      } else {
        return null
      }
    },
    onError: (err: Error) => toast.error(err.message),
    cacheTime: 0,
    staleTime: 0,
  })

  return {
    dataPublications,
    refetchPublications,
    isRefetchPublications,
    fetchNextPublications,
    isSuccessPublications,
    isFetchNextPublications,
    hasNextPagePublications,
    isLoadingPublications,
  }
}
