import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css/bundle'
import 'swiper/css/navigation'

import { ButtonNextPrev } from '@/components/slider/ButtonNextPrev'
import { UserPublicationsImages } from '@/services'
import { Placeholder } from '@/ui'

export const SliderImagesPost = ({ postImages }: { postImages: UserPublicationsImages[] }) => {
  return (
    <>
      <Swiper
        className="aspect-square"
        style={
          {
            '--swiper-pagination-color': '#397DF6',
            '--swiper-pagination-bullet-inactive-color': '#fff',
            '--swiper-pagination-bullet-inactive-opacity': 1,
          } as any
        }
        modules={[Navigation, Pagination]}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        pagination={{ clickable: true }}
        spaceBetween={50}
      >
        {postImages.map((image, index) => (
          <SwiperSlide key={index} className="flex items-center" data-src={image}>
            <Placeholder
              alt="slider image post"
              className="bg-dark-500 h-full w-full object-contain"
              width={491}
              height={504}
              src={image.versions.huge.url || null}
            />
          </SwiperSlide>
        ))}
        <ButtonNextPrev />
      </Swiper>
    </>
  )
}
