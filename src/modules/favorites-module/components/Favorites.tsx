import React, { FC, Fragment, useEffect, useState } from 'react'

import Autocomplete from 'react-google-autocomplete'
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService'

import { useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { Favorite } from '@/modules/favorites-module/components/Favorite'
import { FavoriteSkeleton } from '@/modules/favorites-module/components/FavoriteSkeleton'
import { useGetFavorites } from '@/modules/favorites-module/hooks/useGetFavorites'
import { useModalsStore } from '@/store'

export const Favorites: FC = () => {
  const { isInitialLoading, favorites, isFetchingNextPage, hasNextPage, fetchNextPage, isSuccess } =
    useGetFavorites()
  const { setPostIdAndOpenModal } = useModalsStore(state => state.postModal)

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

  const onPostClick = (id: number) => {
    setPostIdAndOpenModal(id)
  }

  const FavoriteSkeletons = () => {
    return (
      <>
        {Array.from({ length: 4 }, (_, i) => i).map(i => (
          <FavoriteSkeleton key={i} />
        ))}
      </>
    )
  }

  const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: 'AIzaSyDX9b3XiEm0xRsJD82zJY4D6BSWai8APKM',
      debounce: 300,
      options: {
        fields: ['geometry'],
      },
    })

  console.log('predictions', placePredictions)

  const [search, setSearch] = useState('')

  useEffect(() => {
    // fetch place details for the first element in placePredictions array
    if (placePredictions.length)
      placesService?.getDetails(
        {
          placeId: placePredictions[0].place_id,
        },
        (placeDetails: any) => console.log('place details', placeDetails)
      )
  }, [placePredictions])

  return (
    <div className="text-xl font-bold">
      <div>Favorites</div>

      {isPlacePredictionsLoading && <p>loading</p>}

      <div>
        <input
          type="text"
          className="text-black"
          onChange={event => {
            getPlacePredictions({ input: event.target.value })
            setSearch(event.target.value)
          }}
        />
      </div>

      <div>
        <Autocomplete
          apiKey={'AIzaSyDX9b3XiEm0xRsJD82zJY4D6BSWai8APKM'}
          style={{ width: '90%' }}
          onPlaceSelected={place => {
            console.log(place)
          }}
          options={{
            types: ['address'],
          }}
          defaultValue="Amsterdam"
          className="text-black"
        />
        ;
      </div>

      <div className="mt-4">
        <div className="grid grid-cols-4 gap-3">
          {isInitialLoading ? (
            <FavoriteSkeletons />
          ) : (
            favorites?.pages.map((page, idx) => (
              <Fragment key={idx}>
                {page.items.map(post => (
                  <Favorite key={post.id} post={post} onPostClick={onPostClick} />
                ))}
              </Fragment>
            ))
          )}
        </div>

        <RenderLoadingIndicator
          isSuccess={isSuccess}
          isFetchNextPage={isFetchingNextPage}
          customRef={ref}
        />
      </div>
    </div>
  )
}
