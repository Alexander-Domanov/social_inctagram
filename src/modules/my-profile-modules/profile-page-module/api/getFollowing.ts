import { userProfilePageData } from '@/modules/user-profile-module'
import { authInstance } from '@/services'

export const getFollowingData = async ({
  userName,
  search,
}: {
  userName: string
  search: string
}) => {
  const res = await authInstance.get<userProfilePageData>(`users/${userName}/following`, {
    params: {
      search: search,
    },
  })

  return res.data
}
