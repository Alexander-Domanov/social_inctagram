import { RootProfile } from '@/modules/profile-modules/settings-edit-profile-module'
import { userNameQueryType } from '@/modules/profile-modules/user-profile-module'
import { authInstance } from '@/services'

export const getUserProfile = (userNameQuery: userNameQueryType): Promise<RootProfile> => {
  return authInstance.get(`users/${userNameQuery}`)
}
