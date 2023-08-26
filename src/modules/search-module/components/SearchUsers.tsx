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
          {dataSearch?.pages
            ? dataSearch.pages.map((page, index) => (
                <UserFound
                  key={index}
                  redirectToUserProfilePage={redirectToUserProfilePage}
                  userItems={page.items}
                />
              ))
            : 'notFound'}
        </>

        <RenderLoadingIndicator
          customRef={ref}
          isSuccess={isSuccessSearch}
          isFetchNextPage={isFetchingNextPageSearch}
        />
      </div>
    </div>
  )
}
