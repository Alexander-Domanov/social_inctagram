import React from 'react'

import { Confirm } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { ModalCreatePostType } from '@/modules/create-post-module'
import { indexedDbPostDraft } from '@/modules/create-post-module/indexedDB/indexedDbPostDraft.repository'
import { saveDraftPost } from '@/modules/create-post-module/indexedDB/saveDraftPost'
import { useImageSelector } from '@/store/storeSelectorPhoto'

export const SaveDraftPost = ({ isModalOpen, onClose }: ModalCreatePostType) => {
  const { imagesSelector, description, setDescription } = useImageSelector()
  const { t } = useTranslation()
  const { title, text, declineButtonText, confirmButtonText } = t.createPost.saveDraftPost.confirm
  const onConfirmClick = async () => {
    await saveDraftPost(imagesSelector, description)
    onClose()
    setDescription('')
  }

  const onDiscardClick = async () => {
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
        text={text}
        title={title}
        confirmButtonText={confirmButtonText}
        declineButtonText={declineButtonText}
      />
    </div>
  )
}
