import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { notification_api } from '@/modules/notification-module'

export const useGetNotifications = () => {
  const {
    data: dataNotifications,
    isRefetching: isRefetchNotifications,
    isSuccess: isSuccessNotifications,
    isLoading: isLoadingNotifications,
  } = useQuery(['get-notifications'], () => notification_api.getUnreadNotifications(), {
    onError: (err: Error) => toast.error(err.message),
    cacheTime: 0,
    staleTime: 0,
  })

  return {
    dataNotifications,
    isRefetchNotifications,
    isSuccessNotifications,
    isLoadingNotifications,
  }
}
