import { authInstance } from '@/services'
import { FollowingFollowersLikesPropsType, ItemsFollowingFollowersLikesType } from '@/types'

export const getFollowingData = async ({
  userName,
  search,
  pageParam,
}: Omit<FollowingFollowersLikesPropsType, 'postId'>) => {
  console.log(pageParam)
  const res = await authInstance.get<ItemsFollowingFollowersLikesType>(
    `users/${userName}/following`,
    {
      params: {
        search: search,
        cursor: pageParam,
      },
    }
  )

  return res.data
}
