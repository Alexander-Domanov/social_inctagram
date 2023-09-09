import { useInfiniteQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { apiLikes } from '@/services'
import { FollowingFollowersLikesPropsType } from '@/types'

type UseGetCommentsLikes = {
  commentId: number | null
} & Pick<FollowingFollowersLikesPropsType, 'search' | 'postId'>

export const useGetCommentsLikes = ({ postId, search, commentId }: UseGetCommentsLikes) => {
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
    ['likes-comments', search, postId, commentId],
    ({ pageParam = 0 }) => apiLikes.getCommentsLikes({ commentId, postId, search, pageParam }),
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
      enabled: Boolean(postId && commentId),
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
