import { RootProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { authInstance } from '@/services'
import { userQueryType } from '@/types'

export const getUserProfile = (userNameQuery: userQueryType): Promise<RootProfile> => {
  return authInstance.get(`users/${userNameQuery}`)
}
