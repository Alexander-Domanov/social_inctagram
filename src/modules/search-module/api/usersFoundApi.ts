import { SearchDataInterface } from '@/modules/search-module'
import { authInstance } from '@/services'

export const getUserFoundData = (search: string): Promise<SearchDataInterface> => {
  return authInstance.get(`users`, {
    params: {
      search: search,
    },
  })
}
