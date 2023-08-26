import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowersData } from '@/services/api/following-followers-delete-api/getFollowers'
import { FollowingFollowersPropsType } from '@/types'

export const useGetFollowers = ({
  userName,
  search,
}: Omit<FollowingFollowersPropsType, 'pageParam'>) => {
  const {
    data: dataFollowersItems,
    refetch: refetchFollowers,
    isRefetching: isRefetchingFollowers,
    isSuccess: isSuccessFollowers,
    hasNextPage: hasNextPageFollowers,
    isFetchingNextPage: isFetchNextPageFollowers,
    fetchNextPage: fetchNextPageFollowers,
  } = useInfiniteQuery(
    ['users-followers', search],
    ({ pageParam = 0 }) => getFollowersData({ userName, search, pageParam }),
    {
      getNextPageParam: (lastPage, _allPages) => {
        if (lastPage.nextCursor) {
          return lastPage.nextCursor
        } else {
          return null
        }
      },
      onError: (err: Error) => toast.error(err.message),
      enabled: Boolean(userName),
      retry: false,
    }
  )

  return {
    dataFollowersItems,
    refetchFollowers,
    isRefetchingFollowers,
    fetchNextPageFollowers,
    isSuccessFollowers,
    isFetchNextPageFollowers,
    hasNextPageFollowers,
  }
}
