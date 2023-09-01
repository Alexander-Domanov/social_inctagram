import React, { FC, memo, PropsWithChildren, useEffect } from 'react'

import { useRouter } from 'next/router'

import { routes } from '@/routing/router'
import { useMeQuery } from '@/services/hookMe'
import { useUserStore } from '@/store'
import { Preloader } from '@/ui'

const AuthProtection: FC<PropsWithChildren> = memo(({ children }) => {
  const { pathname, replace } = useRouter()
  const { setUserId, setHasBusinessAccount, setUserName } = useUserStore()

  const { isSuccess, isError, fetchStatus } = useMeQuery(
    userId => {
      setUserId(userId)
    },
    hasBusinessAccount => {
      setHasBusinessAccount(hasBusinessAccount)
    },
    userName => {
      setUserName(userName)
    }
  )

  useEffect(() => {
    if (isSuccess && routes.auth.unProtectedPaths.includes(pathname)) {
      replace(routes.sideBar.profile, undefined, { shallow: true })
    }
    if (isError && !routes.auth.unProtectedPaths.includes(pathname)) {
      replace(routes.auth.login, undefined, { shallow: true })
    }
  }, [isSuccess, isError])

  return (
    <>
      {fetchStatus === 'fetching' && <Preloader />}
      {children}
    </>
  )
})

export default AuthProtection
