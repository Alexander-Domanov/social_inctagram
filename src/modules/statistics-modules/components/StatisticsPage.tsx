import { statistics_business_tabs } from '@/common'
import { StatisticsBusinessTabs } from '@/modules/statistics-modules'

export const StatisticsPage = () => {
  return (
    <div className="">
      <div className="flex flex-col gap-3">
        <span>Likes</span>
        <StatisticsBusinessTabs
          keyLocalStorage={'statistics-likes'}
          tabs={statistics_business_tabs}
        />
      </div>
    </div>
  )
}
