import React from 'react'

import { useRouter } from 'next/router'

import { routes } from '@/routing/router'
import { Avatar } from '@/ui'

export const URLUsernameForModal = ({
  avatartSrc,
  userName,
}: {
  avatartSrc: string | null
  userName: string
}) => {
  const router = useRouter()
  const callBack = () => {
    router.replace(`${routes.sideBar.userHomePage}${userName}`)
  }

  return (
    <>
      <div className="p-4 flex justify-between text-light-100 leading-6 font-semibold text-bas">
        <div className=" flex gap-3 items-center">
          <Avatar src={avatartSrc} width={36} height={36} alt={''} />
          <span className="linkText w-[150px] overflow-hidden truncate" onClick={callBack}>
            {userName}
          </span>
        </div>
      </div>
    </>
  )
}
