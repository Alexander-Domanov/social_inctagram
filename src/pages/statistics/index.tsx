import Head from 'next/head'

import { getGlobalLayout } from '@/components/layout'
import { useTranslation } from '@/components/translation'
import { StatisticsPage } from '@/modules/statistics-modules'

const Statistics = () => {
  const { t } = useTranslation()

  return (
    <>
      <Head>
        <title>{t.statistics.headTitle}</title>
      </Head>
      <StatisticsPage />
    </>
  )
}

Statistics.getLayout = getGlobalLayout
export default Statistics
