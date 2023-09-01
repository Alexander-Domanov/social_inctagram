import { PropsWithChildren } from 'react'

import dayjs from 'dayjs'
import { NextPage } from 'next'
import { AiOutlineMessage } from 'react-icons/ai'
import { FaHeart, FaRegBookmark, FaRegHeart, FaRegPaperPlane } from 'react-icons/fa6'

import { LikeStatus } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useChangePostLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostLikeStatus'
import { useGetPost } from '@/modules/post-modules/latest-posts-module/hooks/useGetPost'
import { useUserStore } from '@/store'
import { Avatar } from '@/ui'

export const LikesMessageSendBlock: NextPage<PropsWithChildren> = ({ children }) => {
  const { postId } = useUserStore()
  const { post } = useGetPost(postId)
  const { mutate } = useChangePostLikeStatus(
    postId,
    post?.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )

  const onLikeClick = () => {
    mutate()
  }

  return (
    <div className="">
      <div className="flex items-center text-2xl leading-none text-white">
        <div className="flex gap-5 pt-3">
          <button className="" onClick={onLikeClick}>
            {post?.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
          </button>
          <button>
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

      <div className="flex items-center mt-3 text-white text-sm leading-none h-6">
        {post?.likeCount! > 0 && (
          <div className="mr-3 flex items-center">
            {post?.newLikes?.map((like, idx, array) => (
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

        {post && (
          <div>
            {post?.likeCount} <span className="font-bold">Like</span>
          </div>
        )}
      </div>

      <div className="mt-2 text-xs leading-none text-light-900">
        {post?.createdAt && dayjs(post.createdAt).format('MMMM D, YYYY')}
      </div>
    </div>
  )
}
