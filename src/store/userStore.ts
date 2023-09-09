import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface DescriptionStore {
  description: string
  setDescription: (description: string) => void
}

export const useSaveDescription = create<DescriptionStore>()(
  devtools(set => ({
    description: '',
    setDescription(description) {
      set({ description: description })
    },
  }))
)

interface UserStore {
  uploadId: string
  setUploadId: (uploadId: string) => void
  userId: number | null
  userName: string | null
  setUserId: (userId: number) => void
  setUserName: (userName: string | null) => void
  postId: number | null
  setPostId: (id: number | null) => void
  hasBusinessAccount: boolean
  setHasBusinessAccount: (hasBusinessAccount: boolean) => void
  descriptionLocal: string
  setDescriptionLocal: (descriptionLocal: string) => void
  publicationCount: number
  followersCount: number
  followingCount: number
  likesCount: number
  setLikesCount: (count: number) => void
  setFollowersCount: (count: number) => void
  setFollowingCount: (count: number) => void
  setPublicationsCount: (count: number) => void
}

export const useUserStore = create<UserStore>()(
  devtools(set => ({
    uploadId: '',
    hasBusinessAccount: false,
    userId: null,
    userName: null,
    postId: null,
    descriptionLocal: '',
    followingCount: 0,
    followersCount: 0,
    publicationCount: 0,
    likesCount: 0,
    setHasBusinessAccount(hasBusinessAccount) {
      set({ hasBusinessAccount: hasBusinessAccount })
    },
    setUploadId(uploadId) {
      set({ uploadId: uploadId })
    },
    setUserId(userId) {
      set({ userId: userId })
    },
    setUserName(userName) {
      set({ userName: userName })
    },
    setPostId(id) {
      set({ postId: id })
    },
    setDescriptionLocal(descriptionLocal) {
      set({ descriptionLocal: descriptionLocal })
    },
    setFollowersCount(followersCount) {
      set({ followersCount })
    },
    setFollowingCount(followingCount) {
      set({ followingCount })
    },
    setLikesCount(likesCount) {
      set({ likesCount })
    },
    setPublicationsCount(publicationCount) {
      set({ publicationCount })
    },
  }))
)
