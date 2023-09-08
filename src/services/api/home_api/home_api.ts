import { authInstance } from '@/services'
import { UserProfileAvatarInterface } from '@/types'

export type NewLikes = {
  id: number
  username: string
  avatars: {
    thumbnail: {
      url: string
      width: number
      height: number
      fileSize: number
    }
    medium: {
      url: string
      width: number
      height: number
      fileSize: number
    }
  }
}
export type UserPublicationsImages = {
  uploadId: string
  versions: {
    huge: {
      url: string
      width: number
      height: number
      fileSize: number
    }
    large: {
      url: string
      width: number
      height: number
      fileSize: number
    }
  }
}

export type UserPublicationType = {
  id: number
  ownerId: number
  description: string
  location: string
  images: UserPublicationsImages[]

  createdAt: string
  updatedAt: string

  commentCount: number
  likeCount: number
  userName: string
  avatars: UserProfileAvatarInterface
  isLiked: boolean

  isFavorite: true
  isFollowing: true
  isFollowedBy: true

  newLikes: NewLikes[]
}

export type UserPublicationsType = {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  prevCursor: number
  nextCursor: number
  items: UserPublicationType[]
}

export const getPublicationsApi = async ({ pageParam }: { pageParam: number }) => {
  const res = await authInstance.get<UserPublicationsType>('home/publications-followers', {
    params: {
      cursor: pageParam,
    },
  })

  return res.data
}
