import { StatisticsProps } from '@/modules/statistics-modules'

export const getChartColors = ({ type }: Pick<StatisticsProps, 'type'>) => {
  const colorsStatistics = {
    likes: {
      stroke: '#CC1439',
      fillArea: '#660A1D',
      dot: '#CC1439',
      activeDot: {
        stroke: '#14CC70',
        fill: '#0F9954',
      },
    },
    comments: {
      stroke: '#397DF6',
      fillArea: '#234E99',
      dot: '#397DF6',
      activeDot: {
        stroke: '#397DF6',
        fill: '#2F68CC',
      },
    },
    publicationViews: {
      stroke: '#14CC70',
      fillArea: '#0A6638',
      dot: '#14CC70',
      activeDot: {
        stroke: '#CC1439',
        fill: '#990F2B',
      },
    },
  }

  return {
    stroke: colorsStatistics[type]?.stroke || '',
    fillArea: colorsStatistics[type]?.fillArea || '',
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
