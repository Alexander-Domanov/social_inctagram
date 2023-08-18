export interface userProfilePageData {
  aboutMe: string | null
  avatars: userProfileAvatars | null
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
}

export interface userProfileAvatars {
  thumbnail: {
    url: 'string'
    width: 0
    height: 0
    fileSize: 0
  }
  medium: {
    url: 'string'
    width: 0
    height: 0
    fileSize: 0
  }
}

export type userQueryType = string | string[]
