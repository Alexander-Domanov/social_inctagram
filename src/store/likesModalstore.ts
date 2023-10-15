import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

type LikesModalString = 'likes' | 'commentLikes' | 'commentAnswerLikes' | ''

interface LikesModalStoreInterface {
  isLikesModal: LikesModalString | boolean
  setLikesModal: (isLikesModal: LikesModalString | boolean) => void
}

export const useLikesModalStore = create<LikesModalStoreInterface>()(
  immer(set => ({
    isLikesModal: '',
    setLikesModal(isLikesModal) {
      set({ isLikesModal: isLikesModal })
    },
  }))
)
