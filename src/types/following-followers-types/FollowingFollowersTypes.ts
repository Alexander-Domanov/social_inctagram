import {
  ModalManagerType,
  StateModalFollowingFollowersType,
  UserProfileAvatarInterface,
} from '@/types'

export type FollowingsFollowersLikesType = {
  avatars: UserProfileAvatarInterface | null
  createdAt: string
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  userId: number
  userName: string
}

export type ItemsFollowingFollowersLikesType = {
  items: FollowingsFollowersLikesType[]
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}

export interface FollowingFollowersLikesPropsType {
  userName: string | string[] | null
  search: string
  pageParam: any
  postId: number | null
}

export type FollowingFollowersComponentsType = {
  isModalOpen: boolean
} & Pick<ModalManagerType<StateModalFollowingFollowersType>, 'onClose'>

export interface FollowUnfollowButtonPropsInterface {
  handleToggleSubscriptionsCallBack: () => void
  isLoadingButton: boolean
  isRefetching: boolean
  isFollowing: boolean
  className?: string
}
