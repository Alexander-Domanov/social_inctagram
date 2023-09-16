import { getGlobalLayout } from '@/components/layout'
import { StatisticsPage } from '@/modules/statistics-modules'

const Statistics = () => {
  return <StatisticsPage />
}

Statistics.getLayout = getGlobalLayout
export default Statistics
