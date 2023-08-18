import { userQueryType } from '@/modules/profile-modules/user-profile-module'
import { authInstance } from '@/services'

export const postUserFollowingUnfollowing = (userId: userQueryType) => {
  return authInstance.post(`users/following`, {
    selectedUserId: userId,
  })
}
