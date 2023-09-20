import React from 'react'

import { useRouter } from 'next/router'
import { twMerge } from 'tailwind-merge'

import { Container } from '@/components/container'
import { MoreInfoMobile } from '@/components/more-info-mobile'
import { LanguageSwitcher } from '@/components/translation'
import { Notification } from '@/modules/notification-module'
import { routes } from '@/routing/router'
import { useMeQuery } from '@/services/hookMe'

export const Header = () => {
  const { isSuccess } = useMeQuery()
  const { replace, pathname } = useRouter()

  const route = isSuccess ? routes.sideBar.profile : routes.auth.login
  const moreInfoClass = routes.auth.unProtectedPaths.includes(pathname) ? 'hidden' : ''

  return (
    <header className="h-[60px] flex items-center text-white bg-dark-700 border-b border-dark-100">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <span className="block" onClick={() => replace(route, undefined, { shallow: true })}>
              Inctagram
            </span>
          </div>
          <div className="flex items-center ">
            <div className="xsm:mr-3 mr-12  ">
              {!routes.auth.unProtectedPaths.includes(pathname) && <Notification />}
            </div>
            <LanguageSwitcher />

            <div className={twMerge('flex hidingElementMoreMobile w-full', moreInfoClass)}>
              <MoreInfoMobile />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
