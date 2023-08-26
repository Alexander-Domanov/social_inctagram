import React from 'react'

import { useInViewScrollEffect } from '@/common'
import { useTranslation } from '@/components/translation'
import { useUsersGetSearchData } from '@/modules/search-module/custom/hooks/useGetSearchData'
import { InputSearch, Spinner } from '@/ui'
import { useRedirectToUserProfilePage, UserFound, useSearch } from 'src/modules/search-module'

export const SearchUsers = () => {
  const { search, searchInput, setSearchInput } = useSearch()
  const redirectToUserProfilePage = useRedirectToUserProfilePage()
  const { t } = useTranslation()
  const {
    data: searchData,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isFetchingNextPage,
  } = useUsersGetSearchData(search)

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

  return (
    <div className="w-full flex">
      <div className="flex flex-col w-full">
        <h1 className={'text-light-100 font-bold pb-3'}>{t.search.searchTitle}</h1>
        <InputSearch
          className="h-9 w-full"
          placeholder={t.search.searchInput}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
        <>
          <span className="pt-7 text-base font-bold leading-6 text-light-100">
            {t.search.recentRequests}
          </span>
          {searchData?.pages
            ? searchData.pages.map((page, index) => (
                <UserFound
                  key={index}
                  redirectToUserProfilePage={redirectToUserProfilePage}
                  userItems={page.items}
                />
              ))
            : 'notFound'}
        </>

        {isSuccess && (
          <div className="pt-4 flex w-full justify-center pb-4" ref={ref}>
            {isFetchingNextPage && (
              <div>
                <Spinner />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
