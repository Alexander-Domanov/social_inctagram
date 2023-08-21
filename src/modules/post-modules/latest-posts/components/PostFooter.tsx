import { FC } from 'react'

import { FaHeart, FaRegHeart } from 'react-icons/fa6'

import { LikeStatus } from '@/modules/post-modules/latest-posts/api/latest-posts-api'
import { useChangePostLikeStatus } from '@/modules/post-modules/latest-posts/hooks/useChangePostLikeStatus'
import { useGetPost } from '@/modules/post-modules/latest-posts/hooks/useGetPost'
import { useUserStore } from '@/store'

export const PostFooter: FC = () => {
  const { postId } = useUserStore()
  const { post } = useGetPost(postId)
  const { mutate } = useChangePostLikeStatus(
    postId,
    post?.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )

  const onLikeClick = () => {
    console.log('on like click')
    mutate()
  }

  return (
    <div className="border-t border-b border-dark-100 h-[108px] px-6 py-3">
      <div className="flex items-center">
        <button className="w-6 h-6 text-2xl leading-none text-white" onClick={onLikeClick}>
          {post?.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
        </button>
      </div>

      <div className="flex items-center mt-5 text-white text-sm leading-none">
        <div>
          {post?.likeCount} <span className="font-bold">Like</span>
        </div>
      </div>
    </div>
  )
}
