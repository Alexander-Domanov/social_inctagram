import { statistics_business_tabs } from '@/common'
import { useTranslation } from '@/components/translation'
import { StatisticsBusinessTabs } from '@/modules/statistics-modules'

export const StatisticsPage = () => {
  const { t } = useTranslation()

  return (
    <div className="">
      <div className="flex justify-between align-middle">
        <StatisticsBusinessTabs
          keyLocalStorage={'statistics-likes'}
          title={t.statistics.pagesTitle.likes}
          tabs={statistics_business_tabs}
        />
      </div>
    </div>
  )
}
