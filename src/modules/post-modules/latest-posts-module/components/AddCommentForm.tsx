import { FC, FormEvent, useState } from 'react'

import { useAddComment } from '@/modules/post-modules/latest-posts-module/hooks/useAddComment'

interface Props {
  postId: number | null
}

export const AddCommentForm: FC<Props> = ({ postId }) => {
  const [comment, setComment] = useState('')
  const { mutateAsync } = useAddComment(postId, comment)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    mutateAsync().then(() => {
      setComment('')
    })
  }

  return (
    <form
      className="h-[60px] grid grid-cols-[1fr_auto] items-center px-6 gap-6"
      onSubmit={onSubmit}
    >
      <div>
        <input
          type="text"
          className="text-white placeholder-light-900 h-6 w-full bg-transparent outline-none text-sm"
          placeholder="Add a Comment..."
          value={comment}
          onChange={e => setComment(e.target.value)}
          required
          minLength={2}
        />
      </div>

      <div>
        <button type="submit" className="text-accent-500 text-base">
          Publish
        </button>
      </div>
    </form>
  )
}
