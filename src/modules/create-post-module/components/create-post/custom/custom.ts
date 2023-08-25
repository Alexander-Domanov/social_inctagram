import { ParsedUrlQuery } from 'querystring'

import { useEffect } from 'react'

import { StateModalPostType } from '@/types'

export const createPostEffect = (
  setModal: (modal: StateModalPostType) => void,
  query: ParsedUrlQuery
) => {
  return useEffect(() => {
    if (query.create) {
      setModal('photo-uploader')
    }
  }, [query.create])
}
