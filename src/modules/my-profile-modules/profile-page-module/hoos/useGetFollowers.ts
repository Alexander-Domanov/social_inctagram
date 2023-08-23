import { useQuery } from '@tanstack/react-query'

import { getFollowersData } from '@/modules/my-profile-modules/profile-page-module/api/getFollowers'

export const useGetFollowers = ({ userName, search }: { userName: string; search: string }) => {
  const { data } = useQuery(['users-followers', search], () =>
    getFollowersData({ userName, search })
  )

  return { data }
}
