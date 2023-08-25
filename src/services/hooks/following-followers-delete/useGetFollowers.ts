import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowersData } from '@/services/api/following-followers-delete-api/getFollowers'
import { FollowingFollowersPropsType } from '@/types'

export const useGetFollowers = ({ userName, search }: FollowingFollowersPropsType) => {
  const {
    data: dataFollowersItems,
    refetch: refetchFollowers,
    isRefetching: isRefetchingFollowers,
  } = useQuery(['users-followers', search], () => getFollowersData({ userName, search }), {
    onError: (err: Error) => toast.error(err.message),
    enabled: Boolean(userName),
    retry: false,
  })

  return { dataFollowersItems, refetchFollowers, isRefetchingFollowers }
}
