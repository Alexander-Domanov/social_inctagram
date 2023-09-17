import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { notification_api } from '@/modules/notification-module'

export const useGetNotReadNotifications = () => {
  const {
    data: dataNotReadNotifications,
    refetch: refetchNotReadNotifications,
    isRefetching: isRefetchingNotReadNotifications,
    isSuccess: isSuccessNotReadNotifications,
    hasNextPage: hasNextPageNotReadNotifications,
    isFetchingNextPage: isFetchNextPageNotReadNotifications,
    fetchNextPage: fetchNextPageNotReadNotifications,
    isLoading: isLoadingNotReadNotifications,
  } = useInfiniteQuery(
    ['get-not-read-notifications'],
    ({ pageParam = 0 }) => notification_api.getNotReadNotifications(pageParam),
    {
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
    }
  )

  return {
    dataNotReadNotifications,
    refetchNotReadNotifications,
    isRefetchingNotReadNotifications,
    fetchNextPageNotReadNotifications,
    isSuccessNotReadNotifications,
    isFetchNextPageNotReadNotifications,
    hasNextPageNotReadNotifications,
    isLoadingNotReadNotifications,
  }
}
