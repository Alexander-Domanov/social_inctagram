import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowingData } from '@/services/api/following-followers-delete-api/getFollowing'
import { FollowingFollowersPropsType } from '@/types'

export const userGetFollowings = ({
  userName,
  search,
}: Pick<FollowingFollowersPropsType, 'userName' | 'search'>) => {
  const {
    data: followingData,
    refetch: refetchFollowing,
    isRefetching: isRefetchingFollowing,
    isSuccess: isSuccessFollowing,
    hasNextPage: hasNextPageFollowing,
    isFetchingNextPage: isFetchNextPageFollowing,
    fetchNextPage: fetchNextPageFollowing,
  } = useInfiniteQuery(
    ['users-following', search],
    ({ pageParam = 0 }) => getFollowingData({ userName, search, pageParam }),
    {
      getNextPageParam: (lastPage, _allPages) => {
        if (lastPage.nextCursor) {
          return lastPage.nextCursor
        } else {
          return null
        }
      },
      cacheTime: 0,
      staleTime: 0,
      onError: (err: Error) => toast.error(err.message),
      enabled: Boolean(userName),
      retry: false,
    }
  )

  return {
    followingData,
    refetchFollowing,
    isRefetchingFollowing,
    isSuccessFollowing,
    isFetchNextPageFollowing,
    hasNextPageFollowing,
    fetchNextPageFollowing,
  }
}
