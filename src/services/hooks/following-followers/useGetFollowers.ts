import { useQuery } from '@tanstack/react-query'

import { getFollowersData } from '@/services/api/following-followers-api/getFollowers'
import { FollowingFollowersPropsType } from '@/types'

export const useGetFollowers = ({ userName, search }: FollowingFollowersPropsType) => {
  const { data } = useQuery(['users-followers', search], () =>
    getFollowersData({ userName, search })
  )

  return { data }
}
