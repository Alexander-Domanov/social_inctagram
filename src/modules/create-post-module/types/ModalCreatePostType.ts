import { ModalManagerType, StateModalPostType } from '@/types'

export type ModalCreatePostType = {
  isModalOpen: boolean
} & Pick<ModalManagerType<StateModalPostType>, 'onClose' | 'setModalOpen'>
