import { useQuery } from '@tanstack/react-query'

import { getAccountData } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { userProfilePageData } from '@/types'

export const useGetProfileData = () => {
  return useQuery({
    queryKey: ['get-profile-page'],
    queryFn: getAccountData,
    onSuccess: data => {},
    onError: err => {},
    retry: 3,
    staleTime: 0,
    cacheTime: 0,
    select: (data: any): userProfilePageData => data?.data,
  })
}
