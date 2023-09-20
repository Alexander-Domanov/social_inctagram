import { authInstance } from '@/services'

export type NotReadNotificationsData = {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  prevCursor: number
  nextCursor: number
  items: [
    {
      id: number
      userId: number
      title: string
      message: string
      createdAt: string
      isRead: boolean
    }
  ]
}

export const notification_api = {
  getUnreadNotifications: async () => {
    const res = await authInstance.get<{ count: number }>('/notification/get-unread-notifications')

    return res.data
  },

  getNotReadNotifications: async (cursor: number) => {
    const res = await authInstance.get<NotReadNotificationsData>(
      'notification/get-all-notifications',
      {
        params: {
          cursor: cursor,
        },
      }
    )

    return res.data
  },

  postNotificationMarkAsRead: async (notificationId: number) => {
    const res = await authInstance.post(`/notification/mark-as-read/${notificationId}`)

    return res.data
  },
}
