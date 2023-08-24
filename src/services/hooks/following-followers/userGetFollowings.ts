import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowingData } from '@/services/api/following-followers-api/getFollowing'
import { FollowingFollowersPropsType } from '@/types'

export const userGetFollowings = ({ userName, search }: FollowingFollowersPropsType) => {
  const { data } = useQuery(
    ['users-followers', search],
    () => getFollowingData({ userName, search }),
    {
      onError: (err: Error) => toast.error(err.message),
      retry: false,
      enabled: Boolean(search && userName),
    }
  )

  return { data }
}
