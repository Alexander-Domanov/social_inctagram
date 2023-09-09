import { authInstance } from '@/services'
import { FollowingFollowersLikesPropsType, ItemsFollowingFollowersLikesType } from '@/types'

type GetLikesProps = {
  postId: number | null
} & Omit<FollowingFollowersLikesPropsType, 'userName'>

type GetCommentsLikesProps = {
  commentId: number | null
} & GetLikesProps

type GetCommentsAnswersLikeProps = {
  answerId: number | null
} & GetCommentsLikesProps

export const apiLikes = {
  getLikes: async ({ postId, search, pageParam }: GetLikesProps) => {
    const res = await authInstance.get<ItemsFollowingFollowersLikesType>(`posts/${postId}/likes`, {
      params: {
        search: search,
        cursor: pageParam,
      },
    })

    return res.data
  },

  getCommentsLikes: async ({ postId, search, pageParam, commentId }: GetCommentsLikesProps) => {
    const res = await authInstance.get<ItemsFollowingFollowersLikesType>(
      `posts/${postId}/comments/${commentId}/likes`,
      {
        params: {
          search: search,
          cursor: pageParam,
        },
      }
    )

    return res.data
  },

  getCommentsAnswersLikes: async ({
    postId,
    search,
    pageParam,
    commentId,
    answerId,
  }: GetCommentsAnswersLikeProps) => {
    const res = await authInstance.get<ItemsFollowingFollowersLikesType>(
      `posts/${postId}/comments/${commentId}/answers/${answerId}likes`,
      {
        params: {
          search: search,
          cursor: pageParam,
        },
      }
    )

    return res.data
  },
}
