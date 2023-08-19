import { useQuery } from '@tanstack/react-query'

import { getMyPayments } from 'src/modules/my-profile-modules/payments-table-module'

export const useGetMyPayments = () => {
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['get-payments-table-module'],
    queryFn: () => getMyPayments(),
    onError: err => {
      console.log(err)
    },
  })

  return { data, isSuccess, isLoading }
}
