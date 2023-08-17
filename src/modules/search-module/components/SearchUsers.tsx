import { useTranslation } from '@/components/translation'
import { InputSearch } from '@/ui'
import {
  useRedirectToUserProfilePage,
  UserFound,
  usersGetSearchData,
  useSearch,
} from 'src/modules/search-module'

export const SearchUsers = () => {
  const { search, searchInput, setSearchInput } = useSearch()
  const redirectToUserProfilePage = useRedirectToUserProfilePage()
  const { t } = useTranslation()

  const { data: searchData } = usersGetSearchData(search)

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
        {searchData ? (
          <UserFound
            redirectToUserProfilePage={redirectToUserProfilePage}
            userItems={searchData.items}
          />
        ) : (
          'notFound'
        )}
      </div>
    </div>
  )
}
