import { useQuery } from '@tanstack/react-query'

import { usersFoundApi } from 'src/modules/search-module'

export const userGetSearchData = (search: string) => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ['getUserFound', search],
    queryFn: () => usersFoundApi(search),
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
