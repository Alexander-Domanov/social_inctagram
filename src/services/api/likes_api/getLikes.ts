import { authInstance } from '@/services'
import { FollowingFollowersLikesPropsType, ItemsFollowingFollowersLikesType } from '@/types'

type GetLikes = {
  postId: number | null
} & Omit<FollowingFollowersLikesPropsType, 'userName'>

export const getLikes = async ({ postId, search, pageParam }: GetLikes) => {
  const res = await authInstance.get<ItemsFollowingFollowersLikesType>(`posts/${postId}/likes`, {
    params: {
      search: search,
      cursor: pageParam,
    },
  })

  return res.data
}
