import { useTranslation } from '@/components/translation'
import { InputSearch } from '@/ui'
import {
  useRedirectToUserProfilePage,
  UserFound,
  userGetSearchData,
  useSearch,
} from 'src/modules/search-module'
export interface GetUserFoundInterface {
  avatars: null
  createdAt: Date
  firstName: string | null
  id: number
  lastName: string | null
  userName: string | null
}

export const SearchUsers = () => {
  const { search, searchInput, setSearchInput } = useSearch()
  const redirectToUserProfilePage = useRedirectToUserProfilePage()
  const { t } = useTranslation()

  const { data } = userGetSearchData(search)

  return (
    <div className="w-full flex pr-16">
      <div className="flex flex-col w-full">
        <h1 className={'text-light-100 font-bold pb-3'}>{t.search.searchTitle}</h1>
        <InputSearch
          className="h-9 w-full"
          placeholder={t.search.searchInput}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
        {data ? (
          <UserFound
            redirectToUserProfilePage={redirectToUserProfilePage}
            userInfoFound={data.data}
          />
        ) : (
          'notFound'
        )}
      </div>
    </div>
  )
}
