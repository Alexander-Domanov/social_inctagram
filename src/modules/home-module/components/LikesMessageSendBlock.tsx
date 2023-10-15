import { PropsWithChildren } from 'react'

import dayjs from 'dayjs'
import { NextPage } from 'next'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaHeart, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6'

import { useTranslation } from '@/components/translation'
import { LikeStatus } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { PostFavorite } from '@/modules/post-modules/latest-posts-module/components/PostFavorite'
import { useChangePostLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostLikeStatus'
import { UserPublicationType } from '@/services'
import { useLikesModalStore, useUserStore } from '@/store'
import { Avatar } from '@/ui'

export type LikesMessageSendBlockType = {
  publication: UserPublicationType
  postId: number | null
  setPostId: () => void
  onPostClick: () => void
  post: UserPublicationType
}

export const LikesMessageSendBlock: NextPage<PropsWithChildren & LikesMessageSendBlockType> = ({
  publication,
  children,
  setPostId,
  postId,
  onPostClick,
  post,
}) => {
  const { t, localeLanguage } = useTranslation()
  const { setLikesCount } = useUserStore()
  const { mutate } = useChangePostLikeStatus(
    postId,
    publication?.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )
  const { setLikesModal } = useLikesModalStore()
  const onLikeClick = () => {
    setPostId()
    mutate()
  }
  const onOpenModalLikes = () => {
    setLikesModal('likes')
    setPostId()
    setLikesCount(publication.likeCount)
  }

  return (
    <div className="">
      <div className="flex items-center pt-3 text-2xl leading-none text-white">
        <div className="flex items-center gap-5">
          <button className="" onClick={onLikeClick}>
            {publication?.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
          </button>
          <button onClick={() => onPostClick()}>
            <AiOutlineMessage />
          </button>
          <button>
            <FaRegPaperPlane />
          </button>
        </div>

        <PostFavorite setPostId={() => setPostId()} postId={postId} post={post} />
      </div>

      {children}

      <div className="flex items-center mt-5 text-white text-sm leading-none h-6">
        {publication?.likeCount! > 0 && (
          <div className="mr-3 flex items-center">
            {publication?.newLikes?.map((like, idx, array) => (
              <div
                key={like.id}
                style={{ marginLeft: idx === 0 ? 0 : '-12px', zIndex: array.length - idx }}
              >
                <Avatar
                  alt={like.userName || 'avatar'}
                  width={24}
                  height={24}
                  src={like?.avatars?.thumbnail.url}
                />
              </div>
            ))}
          </div>
        )}

        {publication && (
          <div onClick={onOpenModalLikes}>
            {publication?.likeCount}{' '}
            <span className="font-bold xsm:text-sm cursor-pointer">
              {t.likes.getCountLikes(publication.likeCount)}
            </span>
          </div>
        )}
      </div>

      <div className="mt-2 text-xs leading-none text-light-900">
        {publication?.createdAt &&
          dayjs(publication.createdAt).locale(localeLanguage).format('MMMM D, YYYY')}
      </div>
    </div>
  )
}
