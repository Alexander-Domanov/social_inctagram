import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { SearchUsers } from 'src/modules/search-module'

const Search = () => {
  return (
    <div className="w-full">
      <Head>
        <title>Search</title>
      </Head>

      <SearchUsers />
    </div>
  )
}

Search.getLayout = getGlobalLayout
export default Search
