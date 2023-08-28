import React from 'react'

import { Skeleton } from '@/ui/skeletons/Skeleton'

export const SkeletonInfoAboutProfilePage = () => {
  return (
    <>
      <div className="flex xsm:gap-10 sm:gap-10 md:gap-10 lg:gap-10 gap-20 flex-wrap">
        <div className="text-sm leading-6 font-normal">
          <Skeleton classes={'w-[63px] h-[48px]'} />
        </div>
        <div className="text-sm leading-6 font-normal">
          <Skeleton classes={'w-[63px] h-[48px]'} />
        </div>
        <div className="text-sm leading-6 font-normal">
          <Skeleton classes={'w-[63px] h-[48px]'} />
        </div>
      </div>
      <div className="w-full xsm:hidden sm:hidden md:hidden">
        <Skeleton classes={'w-[730px] h-[73px]'} />
      </div>
    </>
  )
}
