import { RootProfile } from '@/modules/profile-modules/settings-edit-profile-module'
import { userQueryType } from '@/modules/profile-modules/user-profile-module'
import { authInstance } from '@/services'

export const getUserProfile = (userNameQuery: userQueryType): Promise<RootProfile> => {
  return authInstance.get(`users/${userNameQuery}`)
}
