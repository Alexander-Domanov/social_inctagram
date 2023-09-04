import { FC, useState } from 'react'

import { FaPen, FaTrash } from 'react-icons/fa'
import { FaEllipsis, FaEnvelope, FaUserMinus } from 'react-icons/fa6'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { DeletePost } from '@/modules/post-modules/edit-post-module/components/DeletePost'
import { EditPost } from '@/modules/post-modules/edit-post-module/components/description-edit/AllEditPost'
import { Post } from '@/modules/post-modules/latest-posts-module/api/latest-posts-api'
import { useMeQuery } from '@/services/hookMe'

interface Props {
  post: Post | undefined
  isLoading: boolean
}

const iconClassname = 'text-base mr-2'

export const PostActions: FC<Props> = ({ post, isLoading }) => {
  const { data: me } = useMeQuery()
  const [isEditModalOpen, setIsEditModalOpen] = useState(false)
  const [isDeletePostOpen, setIsDeletePostOpen] = useState(false)

  const onPostDelete = () => {
    setIsDeletePostOpen(true)
  }

  const onPostEdit = () => {
    setIsEditModalOpen(true)
  }

  const isMyPost = me?.data.userName === post?.userName

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild disabled={isLoading}>
          <button className="text-2xl w-6 h-6 text-white hover:text-accent-500 transition-colors data-[state=open]:text-accent-500 disabled:opacity-50 outline-none">
            <FaEllipsis />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="z-[100]" side="bottom" align="end">
          {isMyPost ? (
            <>
              <DropdownMenuItem onSelect={onPostEdit}>
                <FaPen className={iconClassname} /> Edit Post
              </DropdownMenuItem>

              <DropdownMenuItem onSelect={onPostDelete}>
                <FaTrash className={iconClassname} /> Delete Post
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuItem>
                <FaEnvelope className={iconClassname} /> Report
              </DropdownMenuItem>

              {
                <DropdownMenuItem>
                  <FaUserMinus className={iconClassname} /> Unfollow
                </DropdownMenuItem>
              }
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <DeletePost
        isDeleteModalOpen={isDeletePostOpen}
        setIsDeleteModalOpen={setIsDeletePostOpen}
        postId={post?.id}
        onPostModalClose={() => {}}
      />

      {isEditModalOpen && (
        <>
          {post!.images.map((e, index) => (
            <EditPost
              key={index}
              description={post!.description}
              imageUrl={e.versions.huge.url}
              setOpenModal={setIsEditModalOpen}
              isModalOpen={isEditModalOpen}
              onCloseClick={() => setIsEditModalOpen(false)}
            />
          ))}
        </>
      )}
    </>
  )
}
