import { StatisticsProps } from '@/modules/statistics-modules'

export const getChartColors = ({ type }: Pick<StatisticsProps, 'type'>) => {
  const colorsStatistics = {
    likes: {
      stroke: '#CC1439',
      dot: '#CC1439',
      activeDot: {
        stroke: '#14CC70',
        fill: '#0F9954',
      },
    },
    comments: {
      stroke: '#397DF6',
      dot: '#397DF6',
      activeDot: {
        stroke: '#397DF6',
        fill: '#2F68CC',
      },
    },
    publicationViews: {
      stroke: '#14CC70',
      dot: '#14CC70',
      activeDot: {
        stroke: '#CC1439',
        fill: '#990F2B',
      },
    },
  }

  return {
    stroke: colorsStatistics[type]?.stroke || '',
    dot: {
      stroke: colorsStatistics[type]?.dot || '',
      fill: colorsStatistics[type]?.dot || '',
    },
    activeDot: {
      stroke: colorsStatistics[type]?.activeDot?.stroke || '',
      fill: colorsStatistics[type]?.activeDot?.fill || '',
    },
  }
}
