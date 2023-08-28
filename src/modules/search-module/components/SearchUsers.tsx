import React from 'react'

import { useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { useTranslation } from '@/components/translation'
import { useUsersGetSearchData } from '@/modules/search-module/custom/hooks/useGetSearchData'
import { InputSearch, Spinner } from '@/ui'
import { useRedirectToUserProfilePage, UserFound, useSearch } from 'src/modules/search-module'

export const SearchUsers = () => {
  const { search, searchInput, setSearchInput } = useSearch()
  const redirectToUserProfilePage = useRedirectToUserProfilePage()
  const { t } = useTranslation()
  const {
    dataSearch,
    hasNextPageSearch,
    isSuccessSearch,
    isFetchingNextPageSearch,
    fetchNextPageSearch,
  } = useUsersGetSearchData(search)

  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageSearch,
    fetchNextPage: fetchNextPageSearch,
  })

  return (
    <>
      <div className="w-full flex">
        <div className="flex flex-col w-full h-full justify-center align-middle">
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
            {dataSearch?.pages ? (
              dataSearch.pages.map((page, index) => (
                <UserFound
                  key={index}
                  redirectToUserProfilePage={redirectToUserProfilePage}
                  userItems={page.items}
                />
              ))
            ) : (
              <div className="flex flex-col justify-center gap-1.5 items-center w-full mt-6 xsm:text-sm text-base leading-6 font-semibold text-light-900">
                <span>{t.search.noRequests}</span>
                <span className="xsm:text-xs text-sm leading-4 font-normal">
                  {t.search.placeEmpty}
                </span>
              </div>
            )}
          </>

          <RenderLoadingIndicator
            customRef={ref}
            isSuccess={isSuccessSearch}
            isFetchNextPage={isFetchingNextPageSearch}
          />
        </div>
      </div>
    </>
  )
}
