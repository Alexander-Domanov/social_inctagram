import { useEffect } from 'react'

import { useRouter } from 'next/router'

export const useReplacePathnameQueryEffect = (userName: string) => {
  const { route, replace, pathname } = useRouter()

  return useEffect(() => {
    replace({
      pathname: pathname,
      query: { userName },
    })
  }, [userName, route])
}
