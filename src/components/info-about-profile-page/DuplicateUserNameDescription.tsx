import React from 'react'

import { BusinessAccountIcon } from '@/components/icon/BusinessAccountIcon'
import { RootProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { useUserStore } from '@/store'

export const DuplicateUserNameDescription = ({
  userName,
  aboutMe,
}: Pick<RootProfile, 'userName' | 'aboutMe'>) => {
  const { hasBusinessAccount } = useUserStore()

  return (
    <>
      <div className="sm:mt-4 xl:hidden lg:hidden exl:hidden mt-2 flex flex-col text-light-100 w-full">
        <div className="font-bold text-base flex gap-2">
          {userName} {hasBusinessAccount && <BusinessAccountIcon />}
        </div>
        <div className="w-full mt-3">
          <p className="text-sm leading-6 font-normal break-all">{aboutMe}</p>
        </div>
      </div>
    </>
  )
}
