import React from 'react'

import { GlobalButton } from '@/ui'

export const FollowingsButtons = () => {
  return (
    <>
      <div className="flex items-center gap-10">
        <GlobalButton className="max-w-[98px]" type={'button'} variant={'default'}>
          <span>Follow</span>
        </GlobalButton>
        <GlobalButton className="max-w-[98px]" type={'button'} variant={'gray'}>
          <span>Delete</span>
        </GlobalButton>
      </div>
    </>
  )
}
