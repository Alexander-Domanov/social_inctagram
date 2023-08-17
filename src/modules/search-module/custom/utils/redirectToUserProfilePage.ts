import { useRouter } from 'next/router'

import { routes } from '@/routing/router'

export const useRedirectToUserProfilePage = () => {
  const router = useRouter()

  return (userName: string | null) => {
    if (userName) {
      router.replace(`${routes.sideBar.userHomePage}${userName}`)
    }
  }
}
