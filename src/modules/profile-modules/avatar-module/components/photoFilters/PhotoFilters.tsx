import React from 'react'

import { PhotoFilter } from '@/modules/profile-modules/avatar-module/components/photoFilters/photoFilter/PhotoFilter'

const filters = [
  {
    id: 0,
    filter: 'none',
    filterName: 'Normal',
  },
  {
    id: 1,
    filter: 'contrast(110%) brightness(110%) saturate(130%)',
    filterName: '1977',
  },
  {
    id: 2,
    filter: 'contrast(90%) brightness(110%) saturate(150%) hue-rotate(-10deg)',
    filterName: 'Amaro',
  },
  {
    id: 3,
    filter: 'contrast(150%) saturate(110%)',
    filterName: 'LoFi',
  },
  {
    id: 4,
    filter: 'contrast(120%) saturate(125%)',
    filterName: 'Clarendon',
  },
  {
    id: 5,
    filter: 'contrast(95%) brightness(95%) saturate(150%) sepia(25%)',
    filterName: 'Maven',
  },
  {
    id: 6,
    filter: 'contrast(85%) brightness(110%) saturate(75%) sepia(22%)',
    filterName: 'Reyes',
  },
  {
    id: 7,
    filter: 'contrast(110%) brightness(110%) sepia(30%) grayscale(100%)',
    filterName: 'Inkwell',
  },
  {
    id: 8,
    filter: 'sepia(90%)',
    filterName: 'Sepia',
  },
  // {
  //   id: 6,
  //   // filter: 'contrast(108%) brightness(108%) sepia(8%)',
  //   filter:
  //     'contrast(108%) brightness(108%) saturate(100%) sepia(8%) hue-rotate(0deg) grayscale(0%) invert(0%) blur(0px)',
  //   filterName: 'Valencia',
  // },
  // {
  //   id: 1,
  //   filter: 'grayscale(85%)',
  //   filterName: 'Grayscale',
  // },
  // {
  //   id: 30,
  //   filter: 'contrast(90%) brightness(110%)',
  //   filterName: 'Brooklyn',
  // },
]

export const PhotoFilters = ({
  imageSrc,
  setFilter,
}: {
  imageSrc: string
  setFilter: (filter: string) => void
}) => {
  const onFilterClick = (filter: string) => {
    setFilter(filter)
  }

  const filtersList = filters.map(({ id, filter, filterName }) => {
    return (
      <PhotoFilter
        key={id}
        imageSrc={imageSrc}
        filterName={filterName}
        filter={filter}
        onFilterClick={onFilterClick}
      />
    )
  })

  return <div className={'flex flex-wrap w-[436px]'}>{filtersList}</div>
}
