import { authInstance } from '@/services'
import { userQueryType } from '@/types'

export const postUserFollowingUnfollowing = (userId: userQueryType | undefined) => {
  return authInstance.post(`users/following`, {
    selectedUserId: userId,
  })
}
