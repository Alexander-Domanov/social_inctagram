import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addPostCommentAnswer } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'

export const useAddCommentAnswer = (
  postId: number | null,
  commentId: number | null,
  comment: string
) => {
  const client = useQueryClient()

  const {
    isLoading,
    mutateAsync: addCommentAnswerAsync,
    data,
    isSuccess,
  } = useMutation({
    mutationKey: ['add-comment-answer'],
    mutationFn: () => addPostCommentAnswer(postId, commentId, comment),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['post_comments', { postId }] })
      client.invalidateQueries({ queryKey: ['post_comment_answers', { postId, commentId }] })
    },
  })

  return { addCommentAnswerAsync, data, isLoading, isSuccess }
}
