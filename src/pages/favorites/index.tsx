import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { Favorites } from '@/modules/favorites-module'

const FavoritesPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.favorites.headTitle}</title>
      </Head>

      <Favorites />
    </>
  )
}

FavoritesPage.getLayout = getGlobalLayout
export default FavoritesPage
