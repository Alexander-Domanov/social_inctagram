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
      fetchNextPage()
    }
  }, [inView, hasNextPage])

  return { ref }
}
