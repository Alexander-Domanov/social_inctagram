import React from 'react'

import { GlobalButton } from '@/ui'

export const DeleteUserButton = ({
  deleteUserCallBack,
  userId,
}: {
  deleteUserCallBack: (userId: number) => void
  userId: number
}) => {
  return (
    <>
      <div className="flex items-center gap-10">
        <GlobalButton className="max-w-[98px]" type={'button'} variant={'gray'}>
          <span className="linkText" onClick={() => deleteUserCallBack(userId)}>
            Delete
          </span>
        </GlobalButton>
      </div>
    </>
  )
}
