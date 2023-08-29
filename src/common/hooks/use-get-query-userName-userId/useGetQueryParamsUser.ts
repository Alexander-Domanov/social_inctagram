import { useRouter } from 'next/router'

import { userQueryType } from '@/types'

export const useGetQueryUserNameUserId = () => {
  const { push, query } = useRouter()

  const userNameQuery: userQueryType = query.userName || ''
  const userIdQuery: userQueryType = query.userId || null

  return { push, userIdQuery, userNameQuery }
}
