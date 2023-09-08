import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

interface LikesModalStoreInterface {
  isLikesModal: boolean
  setLikesModal: (isLikesModal: boolean) => void
}

export const useLikesModalStore = create<LikesModalStoreInterface>()(
  immer(set => ({
    isLikesModal: false,
    setLikesModal(isLikesModal) {
      set({ isLikesModal: isLikesModal })
    },
  }))
)
