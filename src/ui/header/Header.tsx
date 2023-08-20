import React from 'react'

import { useRouter } from 'next/router'

import { Container } from '@/components/container'
import { MoreInfoMobile } from '@/components/more-info-mobile'
import { LanguageSwitcher } from '@/components/translation'
import { useMeQuery } from '@/services/hookMe'

export const Header = () => {
  const { isSuccess } = useMeQuery()
  const { replace } = useRouter()

  const route = isSuccess ? '/profile-page' : '/auth/login'

  return (
    <header className="h-[60px] flex items-center text-white bg-dark-700 border-b border-dark-100">
      <Container>
        <div className="flex items-center justify-between">
          <div>
            <span className="block" onClick={() => replace(route, undefined, { shallow: true })}>
              Inctagram ci/cd
            </span>
          </div>
          <div className="flex ">
            <LanguageSwitcher />

            <div className="flex hidingElementMoreMobile w-full">
              <MoreInfoMobile />
            </div>
          </div>
        </div>
      </Container>
    </header>
  )
}
