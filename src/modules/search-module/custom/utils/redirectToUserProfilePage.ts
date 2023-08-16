import { useRouter } from 'next/router'

import { routes } from '@/routing/router'

export const useRedirectToUserProfilePage = () => {
  const router = useRouter()

  const redirectToUserProfilePage = (userName: string | null) => {
    if (userName) {
      router.replace(`${routes.sideBar.userHomePage}${userName}`)
    }
  }

  return redirectToUserProfilePage
}
