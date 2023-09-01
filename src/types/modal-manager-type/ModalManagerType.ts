import { Dispatch, SetStateAction } from 'react'

export type ModalManagerType<M> = {
  onClose: () => void
  isModalOpen: M
  setModalOpen: Dispatch<SetStateAction<M>>
}

export type StateModalFollowingFollowersType = 'Following' | 'Followers' | null
export type StateModalPostType =
  | 'photo-uploader'
  | 'crop-editor'
  | 'filters-editor'
  | 'add-full-post'
  | 'save-draft-post'
  | ''
