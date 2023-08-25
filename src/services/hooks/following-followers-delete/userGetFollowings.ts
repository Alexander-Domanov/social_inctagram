import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowingData } from '@/services/api/following-followers-delete-api/getFollowing'
import { FollowingFollowersPropsType } from '@/types'

export const userGetFollowings = ({ userName, search }: FollowingFollowersPropsType) => {
  const {
    data,
    refetch: refetchFollowing,
    isRefetching: isRefetchingFollowing,
  } = useQuery(['users-followers', search], () => getFollowingData({ userName, search }), {
    onError: (err: Error) => toast.error(err.message),
    enabled: Boolean(userName),
    retry: false,
  })

  return { data, refetchFollowing, isRefetchingFollowing }
}
