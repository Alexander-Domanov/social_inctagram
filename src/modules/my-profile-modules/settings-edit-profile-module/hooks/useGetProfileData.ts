import { useQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getAccountData } from '@/modules/my-profile-modules/settings-edit-profile-module'

export const useGetProfileData = () => {
  return useQuery({
    queryKey: ['get-profile-page'],
    queryFn: getAccountData,
    onSuccess: data => {},
    onError: err => {},
    retry: false,
    ...noRefetch,
    staleTime: 0,
    cacheTime: 0,
    select: (data: any) => data?.data,
  })
}
