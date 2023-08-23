import { useQuery } from '@tanstack/react-query'

import { getFollowingData } from '@/modules/my-profile-modules/profile-page-module/api/getFollowing'

export const userGetFollowings = ({ userName, search }: { userName: string; search: string }) => {
  const { data } = useQuery(['users-followers', search], () =>
    getFollowingData({ userName, search })
  )

  return { data }
}
