import { useQuery } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'

import { GetUserFoundInterface } from '@/modules/search-modules'
import { authInstance } from '@/services'

export const userGetSearchData = (search: string) => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ['getUserFound', search],
    queryFn: () =>
      authInstance
        .get<AxiosResponse<GetUserFoundInterface[]>>(`users`, {
          params: {
            search: search,
          },
        })
        .then(data => data.data),
    staleTime: 0,
    enabled: Boolean(search),
  })

  return {
    data,
    isLoading,
    isSuccess,
    error,
  }
}
