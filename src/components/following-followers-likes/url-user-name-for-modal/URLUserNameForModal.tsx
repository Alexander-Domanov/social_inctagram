import React from 'react'

import { useRouter } from 'next/router'

import { routes } from '@/routing/router'
import { useLikesModalStore } from '@/store'
import { Avatar } from '@/ui'

export const URLUsernameForModal = ({
  avatartSrc,
  userName,
  className,
}: {
  avatartSrc: string | null
  userName: string
  className?: string
}) => {
  const router = useRouter()
  const { setLikesModal } = useLikesModalStore()
  const callBack = () => {
    router.push(`${routes.sideBar.userHomePage}${userName}`)
    setLikesModal('')
  }

  return (
    <>
      <div className="flex justify-between text-light-100 leading-6 font-semibold text-base">
        <div className="flex gap-3 items-center">
          <Avatar src={avatartSrc} width={36} height={36} alt={''} />
          <span
            className={`linkText overflow-hidden cursor-pointer truncate ${className}`}
            onClick={callBack}
          >
            {userName}
          </span>
        </div>
      </div>
    </>
  )
}
