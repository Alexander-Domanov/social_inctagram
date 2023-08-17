import { useQuery } from '@tanstack/react-query'

import { SearchDataInterface, getUserFoundData } from 'src/modules/search-module'

export const usersGetSearchData = (search: string) => {
  const { data, isLoading, isSuccess, error } = useQuery({
    queryKey: ['getUserFound', search],
    queryFn: () => getUserFoundData(search),
    staleTime: 0,
    enabled: Boolean(search),
    select: (data: any): SearchDataInterface => data?.data,
  })

  return {
    data,
    isLoading,
    isSuccess,
    error,
  }
}
