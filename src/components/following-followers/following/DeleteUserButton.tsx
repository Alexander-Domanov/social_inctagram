import React from 'react'

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

import { GlobalButton } from '@/ui'

export const DeleteUserButton = ({
  deleteUserCallBack,
  userId,
  disabled,
}: {
  deleteUserCallBack: (userId: number) => void
  userId: number
  disabled: boolean
}) => {
  const className = {
    disabled: clsx(!disabled && 'linkText', disabled && 'text-light-900'),
  }

  return (
    <>
      <div className="flex items-center gap-10">
        <GlobalButton
          callback={() => deleteUserCallBack(userId)}
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
            Delete
          </span>
        </GlobalButton>
      </div>
    </>
  )
}
