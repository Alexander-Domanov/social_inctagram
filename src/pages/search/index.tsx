import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { SearchUsers } from 'src/modules/search-module'

const Search = () => {
  const { t } = useTranslation()

  return (
    <div className="w-full">
      <Head>
        <title>{t.search.headTitle}</title>
      </Head>

      <SearchUsers />
    </div>
  )
}

Search.getLayout = getGlobalLayout
export default Search
