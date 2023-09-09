import React, { ReactNode, ReactPortal, useEffect } from 'react'

import { NextPage } from 'next'

import { useSearch } from '@/common/hooks/useSearch'
import { useTranslation } from '@/components/translation'
import { useSearchStore } from '@/store'
import { InputSearch } from '@/ui'

type SearchLayoutProps = {
  children?: React.ReactNode
}

export const SearchLayout: React.FC<SearchLayoutProps> = ({ children }) => {
  const { search, searchInput, setSearchInput } = useSearch()
  const { setSearch } = useSearchStore()
  const { t } = useTranslation()

  useEffect(() => {
    setSearch(search)
  }, [search])

  return (
    <>
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={t.search.searchInput}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
      </div>
      {children}
    </>
  )
}
