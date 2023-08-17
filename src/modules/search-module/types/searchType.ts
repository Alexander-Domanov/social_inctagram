export interface UserItemInterface {
  avatars: null
  createdAt: Date
  firstName: string | null
  id: number
  lastName: string | null
  userName: string | null
}

export interface SearchDataInterface {
  items: UserItemInterface[]
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}
