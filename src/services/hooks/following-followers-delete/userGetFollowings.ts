import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowingData } from '@/services/api/following-followers-delete_api/getFollowing'
import { FollowingFollowersLikesPropsType } from '@/types'

export const userGetFollowings = ({
  userName,
  search,
}: Pick<FollowingFollowersLikesPropsType, 'search' | 'userName'>) => {
  const {
    data: followingData,
    refetch: refetchFollowing,
    isRefetching: isRefetchingFollowing,
    isSuccess: isSuccessFollowing,
    hasNextPage: hasNextPageFollowing,
    isFetchingNextPage: isFetchNextPageFollowing,
    fetchNextPage: fetchNextPageFollowing,
    isLoading: isLoadingFollowing,
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
    isLoadingFollowing,
  }
}
