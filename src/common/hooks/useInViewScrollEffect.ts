import { useEffect } from 'react'

import { useInView } from 'react-intersection-observer'

export const useInViewScrollEffect = ({
  hasNextPage,
  fetchNextPage,
}: {
  hasNextPage: boolean | undefined
  fetchNextPage: () => void
}) => {
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('1')
      fetchNextPage()
    }
  }, [inView, hasNextPage])

  return { ref }
}
