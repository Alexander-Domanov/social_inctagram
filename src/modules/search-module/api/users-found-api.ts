import { AxiosResponse } from 'axios'

import { GetUserFoundInterface } from '@/modules/search-module'
import { authInstance } from '@/services'

export const usersFoundApi = (search: string) => {
  return authInstance
    .get<AxiosResponse<GetUserFoundInterface[]>>(`users`, {
      params: {
        search: search,
      },
    })
    .then(data => data.data)
}
