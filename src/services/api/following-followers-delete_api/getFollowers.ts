import { authInstance } from '@/services'
import { FollowingFollowersLikesPropsType, ItemsFollowingFollowersLikesType } from '@/types'

export const getFollowersData = async ({
  userName,
  search,
  pageParam,
}: Omit<FollowingFollowersLikesPropsType, 'postId'>) => {
  const res = await authInstance.get<ItemsFollowingFollowersLikesType>(
    `users/${userName}/followers`,
    {
      params: {
        search: search,
        cursor: pageParam,
      },
    }
  )

  return res.data
}
