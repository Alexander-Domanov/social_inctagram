import { useMutation } from '@tanstack/react-query'

import { accountAPI } from '@/modules/my-profile-modules/account-managment-module/api/account-api'

export const useSetSubscription = () => {
  const { isLoading, mutate, isSuccess, data } = useMutation({
    mutationKey: ['set-subscription-first-time'],
    mutationFn: accountAPI.setSubscription,
    onSuccess: data => {},
    onError: () => {},
  })

  return { isLoading, mutate, isSuccess, data }
}
