import React, { useState } from 'react'

import { useRouter } from 'next/router'

import { Confirm } from '@/components/modals'
import { useTranslation } from '@/components/translation'

export const PaymentConfirmationModals = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(true)
  const [isErrorModalOpen, setIisErrorModalOpen] = useState(true)
  const { t } = useTranslation()
  const { textSuccess, textError, buttonTextSuccess, buttonTextError, titleSuccess, titleError } =
    t.profile.settingsProfile.accountManagement.paymentsConfirmationModals.confirm
  const { query, replace, pathname } = useRouter()

  const onErrorClose = () => {
    setIisErrorModalOpen(false)
    replace(pathname)
  }

  const onSuccessClose = () => {
    setIsSuccessModalOpen(false)
    replace(pathname)
  }

  return (
    <div>
      {query?.success === 'true' && (
        <Confirm
          isOpen={isSuccessModalOpen}
          onConfirm={onSuccessClose}
          onClose={onSuccessClose}
          confirmButtonText={buttonTextSuccess}
          title={titleSuccess}
          text={textSuccess}
        />
      )}
      {query.success === 'false' && (
        <Confirm
          isOpen={isErrorModalOpen}
          onConfirm={onErrorClose}
          onClose={onErrorClose}
          confirmButtonText={buttonTextError}
          title={titleError}
          text={textError}
        />
      )}
    </div>
  )
}
