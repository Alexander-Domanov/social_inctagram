import { PropsWithChildren } from 'react'

import dayjs from 'dayjs'
import { NextPage } from 'next'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaHeart, FaRegBookmark, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6'

import { LikeStatus } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useChangePostLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostLikeStatus'
import { UserPublicationType } from '@/services'
import { Avatar } from '@/ui'

export type LikesMessageSendBlockType = {
  publication: UserPublicationType
  postId: number | null
  setPostId: () => void
  onPostClick: () => void
}

export const LikesMessageSendBlock: NextPage<PropsWithChildren & LikesMessageSendBlockType> = ({
  publication,
  children,
  setPostId,
  postId,
  onPostClick,
}) => {
  const { mutate } = useChangePostLikeStatus(
    postId,
    publication?.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )

  const onLikeClick = () => {
    setPostId()
    mutate()
  }

  return (
    <div className="">
      <div className="flex items-center text-2xl leading-none text-white">
        <div className="flex gap-5 pt-3">
          <button className="" onClick={onLikeClick}>
            {publication?.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
          </button>
          <button onClick={() => onPostClick()}>
            <AiOutlineMessage />
          </button>
          <button className="">
            <FaRegPaperPlane />
          </button>
        </div>

        <button className="pt-3 ml-auto">
          <FaRegBookmark />
        </button>
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
                  alt={like.username}
                  width={24}
                  height={24}
                  src={like?.avatars?.thumbnail.url}
                />
              </div>
            ))}
          </div>
        )}

        {publication && (
          <div>
            {publication?.likeCount} <span className="font-bold">Like</span>
          </div>
        )}
      </div>

      <div className="mt-2 text-xs leading-none text-light-900">
        {publication?.createdAt && dayjs(publication.createdAt).format('MMMM D, YYYY')}
      </div>
    </div>
  )
}
