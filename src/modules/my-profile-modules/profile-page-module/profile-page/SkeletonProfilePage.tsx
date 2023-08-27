import React from 'react'

import {
  SkeletonDuplicateUserNameDescription,
  SkeletonInfoAboutProfilePage,
} from '@/modules/my-profile-modules/profile-page-module'
import { LatestPosts } from '@/modules/post-modules/latest-posts-module'
import { Skeleton } from '@/ui/skeletons/Skeleton'

export const SkeletonProfilePage = () => {
  return (
    <>
      <div className="flex xsm:gap-0 sm:gap-3 sm:items-center text-light-100 gap-9">
        <Skeleton
          classes={
            'xsm:w-[72px] xsm:mr-7 xsm:h-[72px] sm:w-[120px] sm:h-[120px] md:w-[140px] md:h-[140px] w-[204px] h-[204px] rounded-[50%] '
          }
        />
        <div className="flex w-full flex-col gap-5">
          <div className="flex sm:gap-5 md:gap-5 lg:gap-5 flex-wrap justify-between">
            <Skeleton
              classes={
                'flex sm:gap-5 md:gap-5 lg:gap-5 flex-wrap justify-between w-[115px] h-[36px]'
              }
            />
            <Skeleton classes={'xsm:hidden w-[167px] h-[36px]'} />
          </div>
          <SkeletonInfoAboutProfilePage />
        </div>
      </div>
      <SkeletonDuplicateUserNameDescription />
      <LatestPosts />
    </>
  )
}
