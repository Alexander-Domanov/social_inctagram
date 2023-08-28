import React from 'react'

import { Skeleton } from '@/ui/skeletons/Skeleton'

export const SkeletonDuplicateUserNameDescription = () => {
  return (
    <>
      <div className="sm:mt-4 xl:hidden lg:hidden exl:hidden mt-2 flex flex-col text-light-100 w-full">
        <Skeleton classes={'w-[115px] h-[36px]'} />
        <div className="w-full mt-3">
          <Skeleton classes={'w-full h-[73px]'} />
        </div>
      </div>
    </>
  )
}
