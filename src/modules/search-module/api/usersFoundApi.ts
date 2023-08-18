import { POSTS_PER_PAGE } from '@/modules/post-modules/latest-posts/contastants/latest-posts-constants'
import { SearchDataInterface } from '@/modules/search-module'
import { authInstance } from '@/services'

export const getUserFoundData = async ({
  search,
  pageParam,
}: {
  search: string
  pageParam: any
}) => {
  const res = await authInstance.get<SearchDataInterface>(`users`, {
    params: {
      search: search,
      cursor: pageParam,
    },
  })

  return res.data
}
