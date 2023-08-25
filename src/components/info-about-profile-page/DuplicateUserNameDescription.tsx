import React from 'react'

import { RootProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'

export const DuplicateUserNameDescription = ({
  userName,
  aboutMe,
}: Pick<RootProfile, 'userName' | 'aboutMe'>) => {
  return (
    <>
      <div className="sm:mt-4 xl:hidden lg:hidden exl:hidden mt-2 flex flex-col text-light-100 w-full">
        <div className="font-bold text-base ">{userName}</div>
        <div className="w-full mt-3">
          <p className="text-sm leading-6 font-normal break-all">{aboutMe}</p>
        </div>
      </div>
    </>
  )
}
