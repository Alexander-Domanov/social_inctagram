import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { Favorites } from '@/modules/favorites-module'

const FavoritesPage = () => {
  return (
    <>
      <Head>
        <title>Favorites</title>
      </Head>

      <Favorites />
    </>
  )
}

FavoritesPage.getLayout = getGlobalLayout
export default FavoritesPage
