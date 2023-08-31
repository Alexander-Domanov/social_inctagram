import { FC } from 'react'

import Link from 'next/link'

import { Skeleton } from '@/components/ui/skeleton'
import { Post } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { PostActions } from '@/modules/post-modules/latest-posts-module/components/PostActions'
import { Avatar } from '@/ui'

interface Props {
  post: Post | undefined
  isLoading: boolean
}

export const PostModalHeader: FC<Props> = ({ post, isLoading }) => {
  return (
    <div className="h-[60px] px-6 flex items-center justify-between border-dark-100 border-b">
      <div className="flex items-center">
        {isLoading ? (
          <Skeleton className="w-9 h-9 mr-3 rounded-full" />
        ) : (
          <div className="w-9 h-9 mr-3 relative rounded-full overflow-hidden">
            <Avatar
              src={post?.avatars?.thumbnail.url}
              width={36}
              height={36}
              alt={post?.userName || ''}
            />
          </div>
        )}

        {isLoading ? (
          <Skeleton className="w-32 h-4" />
        ) : (
          <Link className="text-white font-semibold leading-none" href={`/${post?.userName}`}>
            {post?.userName}
          </Link>
        )}
      </div>

      <PostActions post={post} isLoading={isLoading} />
    </div>
  )
}
