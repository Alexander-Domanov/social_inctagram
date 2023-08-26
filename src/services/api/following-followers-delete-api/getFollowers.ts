import { authInstance } from '@/services'
import { FollowingFollowersPropsType, ItemsFollowingFollowersType } from '@/types'

export const getFollowersData = async ({
  userName,
  search,
}: Omit<FollowingFollowersPropsType, 'pageParam'>) => {
  const res = await authInstance.get<ItemsFollowingFollowersType>(`users/${userName}/followers`, {
    params: {
      search: search,
    },
  })

  return res.data
}
