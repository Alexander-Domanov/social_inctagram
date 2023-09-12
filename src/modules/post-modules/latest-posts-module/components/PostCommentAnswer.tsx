import { FC } from 'react'

import dayjs from 'dayjs'
import Link from 'next/link'
import { FaHeart, FaRegHeart } from 'react-icons/fa6'

import { getTimeFromNow } from '@/common/helpers/getTimeFromNow'
import { useTranslation } from '@/components/translation'
import { Answer, LikeStatus } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useChangePostCommentAnswerLikeStatus } from '@/modules/post-modules/latest-posts-module/hooks/useChangePostCommentAnswerLikeStatus'
import { useLikesModalStore, useModalsStore, useUserStore } from '@/store'
import { Avatar } from '@/ui'

interface Props {
  postId: number | null
  answer: Answer
  focusInput: () => void
}

export const PostCommentAnswer: FC<Props> = ({ answer, postId, focusInput }) => {
  const { mutate } = useChangePostCommentAnswerLikeStatus(
    postId,
    answer.commentId,
    answer.id,
    answer.isLiked ? LikeStatus.NONE : LikeStatus.LIKE
  )
  const { t } = useTranslation()
  const { postModal } = useModalsStore()
  const { setLikesModal } = useLikesModalStore()
  const { setAnswerId, setCommentId, setLikesCount } = useUserStore()
  const onLikeClick = () => {
    mutate()
  }

  const onAnswerClick = () => {
    postModal.setReply('comment', answer.commentId)

    focusInput()
  }

  const onLinkClick = () => {
    postModal.closeModal()
  }

  const onLikeAnswerClick = () => {
    setCommentId(answer.commentId)
    setAnswerId(answer.id)
    setLikesCount(answer.likeCount)
    setLikesModal('commentAnswerLikes')
  }

  return (
    <div className="py-3">
      <div className="grid grid-cols-[36px_1fr_24px] gap-3">
        <div className="w-9 h-9 shrink-0">
          <Avatar
            src={answer.from.avatars?.thumbnail.url}
            width={36}
            height={36}
            alt={answer.from.userName}
          />
        </div>

        <div className="text-sm leading-6 text-white">
          <div>
            <Link href={`/${answer.from.userName}`} onClick={onLinkClick}>
              <span className="font-semibold">{answer.from.userName}</span>
            </Link>{' '}
            {answer.content}
          </div>

          <div className="mt-2 flex items-center gap-3 text-xs text-light-900 leading-none">
            <time
              dateTime={answer.createdAt}
              title={dayjs(answer.createdAt).format('DD.MM.YYYY HH:mm:ss')}
            >
              {answer.content && getTimeFromNow(answer.createdAt)}
            </time>

            {answer.likeCount > 0 && (
              <div className="font-semibold cursor-pointer" onClick={onLikeAnswerClick}>
                {t.likes.getCountLikes(answer.likeCount)}: {answer.likeCount}
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
            {answer.isLiked ? <FaHeart className="text-danger-500" /> : <FaRegHeart />}
          </button>
        </div>
      </div>
    </div>
  )
}
