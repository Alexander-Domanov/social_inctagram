import React, { FC, Fragment, useState } from 'react'

import { useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { useGetFavorites } from '@/modules/favorites-module/hooks/useGetFavorites'
import { LatestPost } from '@/modules/post-modules/latest-posts-module/components/LatestPost'
import { PostModal } from '@/modules/post-modules/latest-posts-module/components/PostModal'
import { useUserStore } from '@/store'

export const Favorites: FC = () => {
  const { setPostId } = useUserStore()
  const { favorites, isFetchingNextPage, hasNextPage, fetchNextPage, isSuccess } = useGetFavorites()
  const [isOpenPostModal, setIsOpenPostModal] = useState(false)

  const { ref } = useInViewScrollEffect({ hasNextPage, fetchNextPage })

  const onClose = () => {
    setIsOpenPostModal(false)
  }
  const onPostClick = (id: number) => {
    setPostId(id)
    setIsOpenPostModal(true)
  }

  return (
    <div className="text-xl font-bold">
      <div>Favorites</div>

      <div className="mt-4">
        <div className="grid grid-cols-4 gap-3">
          {favorites?.pages.map((page, idx) => (
            <Fragment key={idx}>
              {page.items.map(post => (
                <LatestPost key={post.id} post={post} onPostClick={onPostClick} />
              ))}
            </Fragment>
          ))}
        </div>

        <RenderLoadingIndicator
          isSuccess={isSuccess}
          isFetchNextPage={isFetchingNextPage}
          customRef={ref}
        />
      </div>

      <PostModal isOpen={isOpenPostModal} onClose={onClose} />
    </div>
  )
}
