import { FC, Fragment, useEffect } from 'react'

import dayjs from 'dayjs'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import preloader from '@/assets/gif/loadingGrey.gif'
import { PostComment } from '@/modules/post-modules/latest-posts-module/components/PostComment'
import { PostCommentAnswers } from '@/modules/post-modules/latest-posts-module/components/PostCommentAnswers'
import { useGetComments } from '@/modules/post-modules/latest-posts-module/hooks/useGetComments'
import { Avatar, Spinner } from '@/ui'

interface Props {
  postId: number | null
}

export const PostComments: FC<Props> = ({ postId }) => {
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
            {page && page.items.map(comment => <PostComment key={comment.id} comment={comment} />)}
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
