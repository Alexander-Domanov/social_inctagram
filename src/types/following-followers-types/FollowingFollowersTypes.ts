import {
  ModalManagerType,
  StateModalFollowingFollowersType,
  UserProfileAvatarInterface,
} from '@/types'

export type FollowingsFollowersType = {
  avatars: UserProfileAvatarInterface | null
  createdAt: string
  id: number
  isFollowedBy: boolean
  isFollowing: boolean
  userId: number
  userName: string
}

export type ItemsFollowingFollowersType = {
  items: FollowingsFollowersType[]
  nextCursor: number
  page: number
  pageSize: number
  pagesCount: number
  prevCursor: number
  totalCount: number
}

export interface FollowingFollowersPropsType {
  userName: string | string[] | null
  search: string
  pageParam: any
}

export type FollowingFollowersComponentsType = {
  isModalOpen: boolean
} & Pick<ModalManagerType<StateModalFollowingFollowersType>, 'onClose'>

export interface FollowUnfollowButtonPropsInterface {
  handleToggleSubscriptionsCallBack: () => void
  isLoadingButton: boolean
  isRefetching: boolean
  followOrUnfollow: boolean
}
