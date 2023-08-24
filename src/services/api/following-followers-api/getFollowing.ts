import { authInstance } from '@/services'
import { FollowingFollowersPropsType, ItemsFollowingFollowersType } from '@/types'

export const getFollowingData = async ({ userName, search }: FollowingFollowersPropsType) => {
  const res = await authInstance.get<ItemsFollowingFollowersType>(`users/${userName}/following`, {
    params: {
      search: search,
    },
  })

  return res.data
}
