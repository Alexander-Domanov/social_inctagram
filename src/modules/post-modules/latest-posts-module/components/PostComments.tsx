import React, { FC, Fragment } from 'react'

import { useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
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

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

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

      <RenderLoadingIndicator
        isSuccess={isSuccess}
        isFetchNextPage={isFetchingNextPage}
        customRef={ref}
      />
    </>
  )
}
