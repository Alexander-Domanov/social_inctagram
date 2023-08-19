import { RootProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { userQueryType } from '@/modules/user-profile-module'
import { authInstance } from '@/services'

export const getUserProfile = (userNameQuery: userQueryType): Promise<RootProfile> => {
  return authInstance.get(`users/${userNameQuery}`)
}
