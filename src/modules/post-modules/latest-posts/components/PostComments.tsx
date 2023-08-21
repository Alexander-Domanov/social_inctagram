import React, { FC, Fragment, useEffect } from 'react'

import dayjs from 'dayjs'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

import preloader from '@/assets/gif/loadingGrey.gif'
import { useGetComments } from '@/modules/post-modules/latest-posts/hooks/useGetComments'
import { Avatar } from '@/ui'

interface Props {
  postId: number | null
}

export const PostComments: FC<Props> = ({ postId }) => {
  const { data, isFetchingNextPage, hasNextPage, fetchNextPage, isSuccess } = useGetComments(postId)

  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage()
    }
  }, [inView, hasNextPage])

  if (!isSuccess) return null

  return (
    <>
      <>
        {data?.pages.map((page, idx) => (
          <Fragment key={idx}>
            {page &&
              page.items.map(comment => (
                <div className="px-6 py-3" key={comment.id}>
                  <div className="grid grid-cols-[36px_1fr] gap-3" key={comment.id}>
                    <div className="w-9 h-9 shrink-0">
                      <Avatar
                        src={comment.from.avatars.thumbnail.url}
                        width={36}
                        height={36}
                        alt={comment.from.username}
                      />
                    </div>

                    <div className="text-sm leading-6 text-white">
                      <div>
                        <span className="font-semibold">{comment.from.username}</span>{' '}
                        {comment.content}
                      </div>

                      <div className="mt-1">
                        <time
                          dateTime={comment.createdAt}
                          title={dayjs(comment.createdAt).format('DD.MM.YYYY HH:mm')}
                          className="text-xs text-light-900"
                        >
                          {comment.content && dayjs(comment.createdAt).locale('ru').fromNow()}
                        </time>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </Fragment>
        ))}
      </>

      <div ref={ref} className="mt-4">
        {isFetchingNextPage && (
          <div className="flex justify-center">
            <Image width={50} height={50} src={preloader} alt="preloader" />
          </div>
        )}
      </div>
    </>
  )
}
