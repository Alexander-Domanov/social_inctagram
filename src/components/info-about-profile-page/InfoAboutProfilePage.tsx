import React, { Dispatch, SetStateAction } from 'react'

import { LocaleType } from '@/components/translation'
import { StateModalFollowingFollowersType } from '@/types'

interface InfoAboutProfilePageInterface {
  t: LocaleType
  aboutMe: string
  following: number
  followers: number
  publications: number
  setModalOpen: Dispatch<SetStateAction<StateModalFollowingFollowersType>>
}
export const InfoAboutProfilePage = ({
  t,
  aboutMe,
  following,
  followers,
  publications,
  setModalOpen,
}: InfoAboutProfilePageInterface) => {
  const about = aboutMe ? aboutMe : 'No description'

  return (
    <>
      <div className="flex text-light-100 xsm:gap-10 sm:gap-10 md:gap-10 lg:gap-10 gap-20 flex-wrap">
        <div className="text-sm leading-6 font-normal">
          <div className="font-bold">{following}</div>
          <span
            className="linkText"
            onClick={() => (setModalOpen ? setModalOpen('Following') : null)}
          >
            {t.profile.profilePage.getCountFollowingPage(following)}
          </span>
        </div>
        <div className="text-sm leading-6 font-normal">
          <div className="font-bold">{followers}</div>
          <span
            className="linkText"
            onClick={() => (setModalOpen ? setModalOpen('Followers') : null)}
          >
            {t.profile.profilePage.getCountFollowerPage(followers)}
          </span>
        </div>
        <div className="text-sm leading-6 font-normal">
          <div className="font-bold">{publications}</div>
          <span className="break-words break-all">
            {t.profile.profilePage.getCountPublicationPage(publications)}
          </span>
        </div>
      </div>
      <div className="w-full xsm:hidden sm:hidden md:hidden">
        <p className="text-sm leading-6 font-normal break-all">{about}</p>
      </div>
    </>
  )
}
