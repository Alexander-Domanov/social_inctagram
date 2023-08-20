import React, { FC, useState } from 'react'

import { useRouter } from 'next/router'

import { useInViewScrollEffect } from '@/common'
import { LatestPost } from '@/modules/post-modules/latest-posts-module/components/LatestPost'
import { PostModal } from '@/modules/post-modules/latest-posts-module/components/PostModal'
import { useGetLatestPosts } from '@/modules/post-modules/latest-posts-module/hooks/useGetLatestPosts'
import { useMeQuery } from '@/services/hookMe'
import { useUserStore } from '@/store'
import { SkeletonPost } from '@/ui'
import { useStoreIsLoadingPublication } from 'src/modules/create-post-module'

export const LatestPosts: FC<{ userProfileId?: number | undefined }> = ({ userProfileId }) => {
  const { data: me } = useMeQuery()
  const { setPostId } = useUserStore()
  const { query } = useRouter()
  const userId = userProfileId ? userProfileId : me?.data?.userId
  const userName = query.userName ? query.userName : 'user'
  const { isLoading, isSuccess, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetLatestPosts({
      userId,
      userName,
    })
  const [isOpenPostModal, setIsOpenPostModal] = useState(false)

  const skeletonIsPublication = useStoreIsLoadingPublication(state => state.isLoadingPublication)

  const usedToDrawArraysOfSkeletons = (value: number) => {
    return [...Array(value).keys()].map(i => {
      return <SkeletonPost key={i} />
    })
  }
  const onClose = () => {
    setIsOpenPostModal(false)
  }
  const onPostClick = (id: number) => {
    setPostId(id)
    setIsOpenPostModal(true)
  }

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

  return (
    <div className="xsm:mt-7 mt-14">
      <div className="xsm:grid-cols-3 xsm:gap-0.5 grid grid-cols-4 gap-3">
        {skeletonIsPublication && <SkeletonPost />}
        {isLoading
          ? usedToDrawArraysOfSkeletons(32)
          : data?.pages.map((page, idx) => (
              <React.Fragment key={idx}>
                {page &&
                  page.items.map(post => (
                    <LatestPost key={post.id} post={post} onPostClick={onPostClick} />
                  ))}
              </React.Fragment>
            ))}
      </div>

      {isSuccess && (
        <div className="pt-4" ref={ref}>
          {isFetchingNextPage && (
            <div className={'grid grid-cols-4 gap-3'}>{usedToDrawArraysOfSkeletons(12)}</div>
          )}
        </div>
      )}
      <PostModal isOpen={isOpenPostModal} onClose={onClose} />
    </div>
  )
}
