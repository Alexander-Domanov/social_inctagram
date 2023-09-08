import React, { Dispatch, SetStateAction } from 'react'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { useTranslation } from '@/components/translation'
import { GlobalButton } from '@/ui'

export const DeleteUserButton = ({
  setCurrentDeleteUserId,
  userId,
  disabled,
  setIsModalOpen,
  textModal,
  setTextModal,
}: {
  setCurrentDeleteUserId: Dispatch<SetStateAction<number | null>>
  setIsModalOpen: Dispatch<SetStateAction<boolean>>
  userId: number
  textModal: string
  disabled: boolean
  setTextModal: (text: string | null) => void
}) => {
  const className = {
    disabled: clsx(!disabled && 'linkText', disabled && 'text-light-900'),
  }
  const { t } = useTranslation()
  const setIdAndOpenModalCallBack = () => {
    setCurrentDeleteUserId(userId)
    setIsModalOpen(true)
    setTextModal(textModal)
  }

  return (
    <>
      <div className="flex items-center gap-10">
        <GlobalButton
          callback={() => setIdAndOpenModalCallBack()}
          disabled={disabled}
          className="max-w-[140px]"
          type={'button'}
          variant={'gray'}
        >
          <span
            className={twMerge(
              'text-light-100 text-base font-semibold leading-6',
              className.disabled
            )}
          >
            {t.profile.profilePage.delete}
          </span>
        </GlobalButton>
      </div>
    </>
  )
}
