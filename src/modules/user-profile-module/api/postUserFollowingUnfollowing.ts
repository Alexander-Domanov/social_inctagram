import { userQueryType } from '@/modules/user-profile-module'
import { authInstance } from '@/services'

export const postUserFollowingUnfollowing = (userId: userQueryType | undefined) => {
  return authInstance.post(`users/following`, {
    selectedUserId: userId,
  })
}
