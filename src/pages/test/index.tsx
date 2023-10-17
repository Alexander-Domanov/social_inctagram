import { useEffect, useState } from 'react'

import Autocomplete from 'react-google-autocomplete'
import usePlacesService from 'react-google-autocomplete/lib/usePlacesAutocompleteService'

import { getGlobalLayout } from '@/components/layout'
import { NextPageWithLayout } from '@/pages/_app'

const TestPage: NextPageWithLayout = () => {
  const { placesService, placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      debounce: 300,
      options: {
        fields: ['geometry'],
      },
    })

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
    <div>
      {isPlacePredictionsLoading && <p>loading</p>}{' '}
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
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
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
    </div>
  )
}

TestPage.getLayout = getGlobalLayout

export default TestPage
