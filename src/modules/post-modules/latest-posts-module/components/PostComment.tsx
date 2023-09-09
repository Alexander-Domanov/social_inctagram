import { FC } from 'react'

import dayjs from 'dayjs'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

import { getTimeFromNow } from '@/common/helpers/getTimeFromNow'
import { LikesCommentsPage } from '@/components/following-followers-likes'
import { useTranslation } from '@/components/translation'
import {
  Comment,
  LikeStatus,
} from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { PostCommentAnswers } from '@/modules/post-modules/latest-posts-module/components/PostCommentAnswers'
import { useChangePostCommentLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostCommentLikeStatus'
import { useLikesModalStore, useModalsStore, useUserStore } from '@/store'
import { Avatar } from '@/ui'

interface Props {
  comment: Comment
  focusInput: () => void
}

export const PostComment: FC<Props> = ({ comment, focusInput }) => {
  const { mutate } = useChangePostCommentLikeStatus(
    comment.postId,
    comment.id,
    comment.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )
  const { t } = useTranslation()
  const { setCommentId, setLikesCount } = useUserStore()
  const { postModal } = useModalsStore()
  const { setLikesModal } = useLikesModalStore()
  const onLikeClick = () => {
    mutate()
  }

  const onAnswerClick = () => {
    postModal.setReply('comment', comment.id)

    focusInput()
  }

  const onOpenLikeCommentModal = () => {
    setCommentId(comment.id)
    setLikesCount(comment.likeCount)
    setLikesModal('commentLikes')
  }

  return (
    <div className="px-6 py-3">
      <div className="grid grid-cols-[36px_1fr_24px] gap-3">
        <div className="w-9 h-9 shrink-0">
          <Avatar
            src={comment.from.avatars?.thumbnail.url}
            width={36}
            height={36}
            alt={comment.from.username}
          />
        </div>

        <div className="text-sm leading-6 text-white">
          <div>
            <span className="font-semibold">{comment.from.username}</span> {comment.content}
          </div>

          <div className="mt-2 flex items-center gap-3 text-xs text-light-900 leading-none">
            <time
              dateTime={comment.createdAt}
              title={dayjs(comment.createdAt).format('DD.MM.YYYY HH:mm:ss')}
            >
              {comment.content && getTimeFromNow(comment.createdAt)}
            </time>

            {comment.likeCount > 0 && (
              <div className="font-semibold cursor-pointer" onClick={onOpenLikeCommentModal}>
                {t.likes.getCountLikes(comment.likeCount)}: {comment.likeCount}
              </div>
            )}

            <button className="font-semibold" onClick={onAnswerClick}>
              {t.PostCommentAnswers.answer}
            </button>
          </div>
        </div>

        <div>
          <button
            className="w-6 h-6 flex items-center justify-center text-white text-base outline-none"
            onClick={onLikeClick}
          >
            {comment.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
          </button>
        </div>
      </div>

      {comment?.answerCount > 0 && (
        <PostCommentAnswers
          answerCount={comment.answerCount}
          postId={comment.postId}
          commentId={comment.id}
          focusInput={focusInput}
        />
      )}
      <LikesCommentsPage />
    </div>
  )
}
