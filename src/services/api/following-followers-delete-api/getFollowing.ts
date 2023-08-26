import { authInstance } from '@/services'
import { FollowingFollowersPropsType, ItemsFollowingFollowersType } from '@/types'

export const getFollowingData = async ({
  userName,
  search,
  pageParam,
}: FollowingFollowersPropsType) => {
  const res = await authInstance.get<ItemsFollowingFollowersType>(`users/${userName}/following`, {
    params: {
      search: search,
      cursor: pageParam,
    },
  })

  return res.data
}
