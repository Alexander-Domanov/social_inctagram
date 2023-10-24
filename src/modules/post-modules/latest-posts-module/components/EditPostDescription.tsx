import React, { FC, useEffect, useState } from 'react'

import { Skeleton } from '@/components/ui/skeleton'
import { useGetPost } from '@/modules/post-modules/latest-posts-module/hooks/useGetPost'
import { useUpdatePost } from '@/modules/post-modules/latest-posts-module/hooks/useUpdatePost'
import { useModalsStore } from '@/store'
import { Avatar, GlobalButton } from '@/ui'

export const EditPostDescription: FC = () => {
  const { postId } = useModalsStore(state => state.postModal)
  const { post, isLoading } = useGetPost(postId)

  const [description, setDescription] = useState<string>('')

  const { mutate } = useUpdatePost()

  useEffect(() => {
    if (post) {
      setDescription(post.description || '')
    }
  }, [post])

  const onSave = () => {
    mutate({ postId, description })
  }

  return (
    <div className="p-6">
      <div className="grid grid-cols-[36px_1fr] gap-3 items-center">
        {isLoading ? (
          <Skeleton className="w-9 h-9 rounded-full" />
        ) : (
          <div className="w-9 h-9 shrink-0">
            <Avatar
              src={post?.avatars?.thumbnail.url}
              width={36}
              height={36}
              alt={post?.userName || ''}
            />
          </div>
        )}

        <div className="text-sm leading-6 text-white">
          {isLoading ? (
            <Skeleton className="w-24 h-6" />
          ) : (
            <span className="font-semibold">{post?.userName}</span>
          )}
        </div>
      </div>

      <div className="mt-6">
        <div className="text-sm text-light-900">Add publication descriptions</div>

        <textarea
          className="w-full border border-dark-100 mt-2 bg-dark-500 resize-none outline-none py-2 px-3 h-[138px]"
          value={description}
          onChange={e => setDescription(e.target.value)}
        ></textarea>

        <button onClick={onSave}>save changes</button>
      </div>
    </div>
  )
}
