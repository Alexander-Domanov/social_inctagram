import React from 'react'

import { LocaleType } from '@/components/translation'

export const InfoAboutProfilePage = ({ t, aboutMe }: { t: LocaleType; aboutMe: string }) => {
  const about = aboutMe ? aboutMe : 'No description'

  return (
    <>
      <div className="flex xsm:gap-3 gap-[72px] flex-wrap">
        <div className="text-sm leading-6 font-normal">
          <div className="font-bold">2 218</div>
          <span>{t.profile.profilePage.following}</span>
        </div>
        <div className="text-sm leading-6 font-normal">
          <div className="font-bold">2 358</div>
          <span>{t.profile.profilePage.followers}</span>
        </div>
        <div className="text-sm leading-6 font-normal">
          <div className="font-bold">2 764</div>
          <span className="break-words break-all">{t.profile.profilePage.Publications}</span>
        </div>
      </div>
      <div className="w-full xsm:hidden">
        <p className="text-sm leading-6 font-normal break-all">{about}</p>
      </div>
    </>
  )
}
