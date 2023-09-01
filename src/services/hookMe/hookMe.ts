import { useQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { meSendRequest } from '@/services'

export const useMeQuery = (
  saveUserId?: (userId: number) => void,
  setHasBusinessAccount?: (hasBusinessAccount: boolean) => void,
  setUserName?: (userName: string | null) => void
) => {
  return useQuery({
    queryFn: meSendRequest,
    onSuccess: data => {
      if (saveUserId) {
        saveUserId(data.data.userId)
      }
      if (setHasBusinessAccount) {
        setHasBusinessAccount(data.data.hasBusinessAccount)
      }
      if (setUserName) {
        setUserName(data.data.userName)
      }
    },
    queryKey: ['me'],
    retry: false,
    staleTime: 300000,
    ...noRefetch,
  })
}
