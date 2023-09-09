import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getLikes } from '@/services'
import { FollowingFollowersLikesPropsType } from '@/types'

export const useGetLikes = ({
  postId,
  search,
}: Pick<FollowingFollowersLikesPropsType, 'search' | 'postId'>) => {
  const {
    data: likesData,
    refetch: refetchLikes,
    isRefetching: isRefetchingLikes,
    isSuccess: isSuccessLikes,
    hasNextPage: hasNextPageLikes,
    isFetchingNextPage: isFetchingNextPageLikes,
    fetchNextPage: fetchNextPageLikes,
    isLoading: isLoadingLikes,
  } = useInfiniteQuery(
    ['likes', search, postId],
    ({ pageParam = 0 }) => getLikes({ postId, search, pageParam }),
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
      enabled: Boolean(postId),
    }
  )

  return {
    likesData,
    refetchLikes,
    isRefetchingLikes,
    isSuccessLikes,
    isFetchingNextPageLikes,
    hasNextPageLikes,
    fetchNextPageLikes,
    isLoadingLikes,
  }
}
