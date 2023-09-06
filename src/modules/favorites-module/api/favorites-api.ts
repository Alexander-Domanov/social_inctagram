import { FAVORITES_PER_PAGE } from '@/modules/favorites-module/constants/favorites-constants'
import { Post } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { authInstance } from '@/services'

interface GetFavoritesResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  prevCursor: number | null
  nextCursor: number | null
  items: Post[]
}

export const getFavorites = async (userName: string | null | undefined, cursor: number | null) => {
  const res = await authInstance.get<GetFavoritesResponse>(`users/${userName}/favorites`, {
    params: {
      pageSize: FAVORITES_PER_PAGE,
      cursor,
    },
  })

  return res.data
}
