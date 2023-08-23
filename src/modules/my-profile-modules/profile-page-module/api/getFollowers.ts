import { userProfilePageData } from '@/modules/user-profile-module'
import { authInstance } from '@/services'

export const getFollowersData = async ({
  userName,
  search,
}: {
  userName: string
  search: string
}) => {
  const res = await authInstance.get<userProfilePageData>(`users/${userName}/followers`, {
    params: {
      search: search,
    },
  })

  return res.data
}
