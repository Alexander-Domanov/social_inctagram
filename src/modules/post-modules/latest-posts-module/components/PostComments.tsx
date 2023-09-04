import { FC, Fragment, useEffect } from 'react'

import { useInView } from 'react-intersection-observer'

import { PostComment } from '@/modules/post-modules/latest-posts-module/components/PostComment'
import { useGetComments } from '@/modules/post-modules/latest-posts-module/hooks/useGetComments'
import { Spinner } from '@/ui'

interface Props {
  postId: number | null
  focusInput: () => void
}

export const PostComments: FC<Props> = ({ postId, focusInput }) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isSuccess, isInitialLoading } =
    useGetComments(postId)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage])

  if (!isSuccess) return null

  return (
    <>
      {isInitialLoading && (
        <div className="flex justify-center">
          <Spinner />
        </div>
      )}

      <>
        {data?.pages.map((page, idx) => (
          <Fragment key={idx}>
            {page &&
              page.items.map(comment => (
                <PostComment key={comment.id} comment={comment} focusInput={focusInput} />
              ))}
          </Fragment>
        ))}
      </>

      <div ref={ref} className="mt-4">
        {isFetchingNextPage && (
          <div className="flex justify-center">
            <Spinner />
          </div>
        )}
      </div>
    </>
  )
}
