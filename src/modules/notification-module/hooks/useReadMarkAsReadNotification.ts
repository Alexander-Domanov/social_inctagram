import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { notification_api } from '@/modules/notification-module'

export const useReadMarkAsReadNotification = () => {
  const client = useQueryClient()
  const { mutate: useMarkAsReadNotification, isLoading: isLoadingMarkAsReadNotification } =
    useMutation(
      ['mark-read-notification'],
      (userId: number) => notification_api.postNotificationMarkAsRead(userId),
      {
        onSuccess: () => {
          client.invalidateQueries({ queryKey: ['get-notifications'] })
          client.invalidateQueries({ queryKey: ['get-not-read-notifications'] })
        },
        onError: (err: Error) => toast.error(err.message),
      }
    )

  return {
    useMarkAsReadNotification,
    isLoadingMarkAsReadNotification,
  }
}
