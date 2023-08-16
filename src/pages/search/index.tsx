import { getGlobalLayout } from '@/components/layout'
import { SearchUsers } from 'src/modules/search-module'

const Search = () => {
  return (
    <div className="w-full">
      <SearchUsers />
    </div>
  )
}

Search.getLayout = getGlobalLayout
export default Search
