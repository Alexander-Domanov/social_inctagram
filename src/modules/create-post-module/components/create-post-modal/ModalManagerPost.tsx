import React from 'react'

import {
  AddFullPost,
  CropEditor,
  FiltersEditor,
  PhotoUploader,
  SaveDraftPost,
} from '@/modules/create-post-module'
import { ModalManagerType, StateModalPostType } from '@/types'

export const ModalManagerPost = ({
  onClose,
  isModalOpen = '',
  setModalOpen,
}: ModalManagerType<StateModalPostType>) => {
  return (
    <>
      <PhotoUploader
        isModalOpen={isModalOpen === 'photo-uploader'}
        onClose={onClose}
        setModalOpen={setModalOpen}
      />
      <CropEditor
        isModalOpen={isModalOpen === 'crop-editor'}
        onClose={onClose}
        setModalOpen={setModalOpen}
      />
      <FiltersEditor
        isModalOpen={isModalOpen === 'filters-editor'}
        onClose={onClose}
        setModalOpen={setModalOpen}
      />
      <AddFullPost
        isModalOpen={isModalOpen === 'add-full-post'}
        onClose={onClose}
        setModalOpen={setModalOpen}
        location={false}
      />
      <SaveDraftPost
        isModalOpen={isModalOpen === 'save-draft-post'}
        onClose={onClose}
        setModalOpen={setModalOpen}
      />
    </>
  )
}
