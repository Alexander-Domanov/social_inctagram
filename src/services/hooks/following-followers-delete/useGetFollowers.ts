import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getFollowersData } from '@/services/api/following-followers-delete_api/getFollowers'
import { FollowingFollowersLikesPropsType } from '@/types'

export const useGetFollowers = ({
  userName,
  search,
}: Omit<FollowingFollowersLikesPropsType, 'pageParam' | 'postId'>) => {
  const {
    data: dataFollowersItems,
    refetch: refetchFollowers,
    isRefetching: isRefetchingFollowers,
    isSuccess: isSuccessFollowers,
    hasNextPage: hasNextPageFollowers,
    isFetchingNextPage: isFetchNextPageFollowers,
    fetchNextPage: fetchNextPageFollowers,
    isLoading: isLoadingFollowers,
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
      cacheTime: 0,
      staleTime: 0,
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
    isLoadingFollowers,
  }
}
