import { useRouter } from 'next/router'

import { userQueryType } from '@/modules/user-profile-module'

export const useGetQueryUserNameUserId = () => {
  const { push, query } = useRouter()

  const userNameQuery: userQueryType = query.userName || ''
  const userIdQuery: userQueryType = query.userId || ''

  return { push, userIdQuery, userNameQuery }
}
