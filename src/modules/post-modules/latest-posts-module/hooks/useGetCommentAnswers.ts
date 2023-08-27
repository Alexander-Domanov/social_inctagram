import { useQuery } from '@tanstack/react-query'

import { noRefetch } from '@/common'
import { getPostCommentAnswers } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useGetCommentAnswers = (postId: number, commentId: number, isOpen: boolean) => {
  const { data, isLoading, isFetching, isInitialLoading } = useQuery({
    queryKey: ['answers', { postId, commentId }],
    queryFn: () => getPostCommentAnswers(postId, commentId),
    ...noRefetch,
    enabled: Boolean(postId && commentId && isOpen),
    cacheTime: 0,
  })

  return { data, isLoading, isFetching, isInitialLoading }
}
