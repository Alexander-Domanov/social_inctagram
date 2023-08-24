import React from 'react'

import { Confirm } from '@/components/modals'
import { ModalCreatePostType } from '@/modules/create-post-module'
import { indexedDbPostDraft } from '@/modules/create-post-module/indexedDB/indexedDbPostDraft.repository'
import { saveDraftPost } from '@/modules/create-post-module/indexedDB/saveDraftPost'
import { useImageSelector } from '@/store/storeSelectorPhoto'

export const SaveDraftPost = ({ isModalOpen, onClose }: ModalCreatePostType) => {
  const { imagesSelector, description, setDescription } = useImageSelector()

  const onConfirmClick = async () => {
    await saveDraftPost(imagesSelector, description)
    onClose()
    setDescription('')
  }

  const onDiscardClick = async () => {
    // await postPhotos.forEach(photo => {
    //   URL.revokeObjectURL(photo.croppedPhoto)
    //   URL.revokeObjectURL(photo.filteredPhoto)
    // })
    await indexedDbPostDraft.clearPreviousDraft()
    onClose()
  }

  return (
    <div>
      <Confirm
        isOpen={isModalOpen}
        onConfirm={onConfirmClick}
        onClose={onDiscardClick}
        onDecline={onDiscardClick}
        text={'Do you want to save draft?'}
        title={'Draft post'}
        confirmButtonText={'Save Draft'}
        declineButtonText={'Discard'}
      />
    </div>
  )
}
