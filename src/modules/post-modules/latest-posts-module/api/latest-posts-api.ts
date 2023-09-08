import {
  COMMENTS_PER_PAGE,
  POSTS_PER_PAGE,
} from '@/modules/post-modules/latest-posts-module/constants/latest-posts-constants'
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
  }[]
  isFavorite: boolean
}

interface GetPostsResponse {
  totalCount: number
  pageCount: number
  page: number
  pageSize: number
  items: Post[]
}

interface GetPostsParams {
  userName: string | string[] | null
  page: number
}

export const getPosts = async ({ userName, page }: GetPostsParams) => {
  const res = await authInstance.get<GetPostsResponse>(`posts/${userName}`, {
    params: {
      pageNumber: page,
      pageSize: POSTS_PER_PAGE,
    },
  })

  return res.data
}

export const getPost = async (postId: number | null) => {
  const res = await authInstance.get<Post>(`posts/p/${postId}`)

  return res.data
}

export const deletePostImage = (postId: number, uploadId: string) => {
  return authInstance.delete(`posts/${postId}/images/${uploadId}`)
}

export interface Comment {
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
  answerCount: number
  likeCount: number
  isLiked: boolean
}

export interface Answer {
  id: number
  commentId: number
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
  likeCount: number
  isLiked: boolean
}

interface GetCommentsResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: Comment[]
}

interface GetCommentAnswersResponse {
  totalCount: number
  pagesCount: number
  page: number
  pageSize: number
  items: Answer[]
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

export const addPostCommentAnswer = async (
  postId: number | null,
  commentId: number | null,
  comment: string
) => {
  return authInstance.post<Answer>(`posts/${postId}/comments/${commentId}/answers`, {
    content: comment,
  })
}

export enum LikeStatus {
  NONE = 'NONE',
  LIKE = 'LIKE',
  DISLIKE = 'DISLIKE',
}

export const changePostLikeStatus = (postId: number | null, likeStatus: LikeStatus) => {
  return authInstance.put(`posts/${postId}/like-status`, {
    likeStatus,
  })
}

export const getPostCommentAnswers = (postId: number, commentId: number) => {
  return authInstance.get<GetCommentAnswersResponse>(
    `posts/${postId}/comments/${commentId}/answers`
  )
}

export const changePostCommentLikeStatus = (
  postId: number | null,
  commentId: number,
  likeStatus: LikeStatus
) => {
  return authInstance.put(`posts/${postId}/comments/${commentId}/like-status`, {
    likeStatus,
  })
}

export const changePostCommentAnswerLikeStatus = (
  postId: number | null,
  commentId: number,
  answerId: number,
  likeStatus: LikeStatus
) => {
  return authInstance.put(`posts/${postId}/comments/${commentId}/answers/${answerId}/like-status`, {
    likeStatus,
  })
}

export const toggleFavoritePost = (postId: number | null) => {
  return authInstance.post(`users/favorite/${postId}`)
}
