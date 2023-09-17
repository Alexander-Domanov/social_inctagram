import { statistics_business_tabs } from '@/common'
import { useTranslation } from '@/components/translation'
import { StatisticsBusinessTabs } from '@/modules/statistics-modules'

export const StatisticsPage = () => {
  const { t } = useTranslation()
  const tabs = statistics_business_tabs()

  return (
    <div className="">
      <span>{t.statistics.pagesTitle.title}</span>
      <div className="flex flex-col text-xl mt-3 leading-9 font-bold gap-9">
        <StatisticsBusinessTabs
          keyLocalStorage={'statistics-likes'}
          title={t.statistics.pagesTitle.likes}
          tabs={tabs.tabsLikes}
        />
        <StatisticsBusinessTabs
          keyLocalStorage={'statistics-comments'}
          title={t.statistics.pagesTitle.comments}
          tabs={tabs.tabsComments}
        />
        <StatisticsBusinessTabs
          keyLocalStorage={'statistics-publication'}
          title={t.statistics.pagesTitle.publication}
          tabs={tabs.tabsPublicationViews}
        />
      </div>
    </div>
  )
}
