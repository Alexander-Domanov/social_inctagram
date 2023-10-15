import { UserProfileAvatarInterface } from '@/types/user-profile-types/user-profile-avatar-type/UserProfileAvatarType'

export interface userProfilePageData {
  aboutMe: string | null
  avatars: UserProfileAvatarInterface | null
  city: string | null
  dateOfBirth: string | null
  firstName: string | null
  followersCount: number
  followingCount: number
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  lastName: string | null
  publicationsCount: number
  userName: string
  hasBusinessAccount: boolean
}

export type userQueryType = string | string[] | number | null
