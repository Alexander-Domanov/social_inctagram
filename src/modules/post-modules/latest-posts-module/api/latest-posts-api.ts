import {
  COMMENTS_PER_PAGE,
  POSTS_PER_PAGE,
} from '@/modules/post-modules/latest-posts-module/contastants/latest-posts-constants'
import { authInstance } from '@/services'

interface Image {
  url: string
  width: number
  height: number
  fileSize: number
}

export interface PostImage {
  uploadId: string
  versions: {
    huge: Image
    large: Image
  }
}

export interface Post {
  id: number
  ownerId: number
  description: string
  location: null | string
  images: PostImage[]
  createdAt: string
  updatedAt: string
  commentCount: number
  likeCount: number
  userName: string
  avatars: {
    thumbnail: Image
    medium: Image
  }
  isLiked: boolean
  newLikes: {
    id: number
    username: string
    avatars: {
      thumbnail: Image
      medium: Image
    }
  }
}

interface GetPostsResponse {
  totalCount: number
  pageCount: number
  page: number
  pageSize: number
  items: Post[]
}

interface GetPostsParams {
  userId: number | undefined
  page: number
}

export const getPosts = async ({ userId, page }: GetPostsParams) => {
  const res = await authInstance.get<GetPostsResponse>(`posts/${userId}`, {
    params: {
      pageNumber: page,
      pageSize: POSTS_PER_PAGE,
    },
  })

  return res.data
}

interface GetPostResponse extends Post {
  createdAt: string
  updatedAt: string
}

export const getPost = async (postId: number | null) => {
  const res = await authInstance.get<GetPostResponse>(`posts/p/${postId}`)

  return res.data
}

export const deletePostImage = (postId: number, uploadId: string) => {
  return authInstance.delete(`posts/${postId}/images/${uploadId}`)
}

interface Comment {
  id: number
  postId: number
  from: {
    id: number
    username: string
    avatars: {
      thumbnail: Image
      medium: Image
    }
  }
  content: string
  createdAt: string
  answerCount: 0
  likeCount: 0
  isLiked: boolean
}

interface GetCommentsResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: Comment[]
}

export const getPostComments = async (postId: number | null, page: number) => {
  const response = await authInstance.get<GetCommentsResponse>(`posts/${postId}/comments`, {
    params: {
      pageNumber: page,
      pageSize: COMMENTS_PER_PAGE,
    },
  })

  return response.data
}

export const addPostComment = async (postId: number | null, comment: string) => {
  return authInstance.post<Comment>(`posts/${postId}/comments`, {
    content: comment,
  })
}

export enum LikeStatus {
  NONE = 'NONE',
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export const changePostListStatus = (postId: number | null, likeStatus: LikeStatus) => {
  return authInstance.put(`posts/${postId}/like-status`, {
    likeStatus,
  })
}
