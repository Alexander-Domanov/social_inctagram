import { useEffect } from 'react'

import { useRouter } from 'next/router'

import { StateModalFollowingFollowersType } from '@/types'

export const useReplaceModal = ({ modalOpen }: { modalOpen: StateModalFollowingFollowersType }) => {
  const { pathname, replace, query } = useRouter()

  useEffect(() => {
    const newQuery = modalOpen !== undefined ? { ...query, modalOpen } : { ...query }

    replace(
      {
        pathname: pathname,
        query: newQuery,
      },
      undefined,
      { shallow: true }
    )
  }, [modalOpen])
}
