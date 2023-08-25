import { AxiosResponse } from 'axios'
import { UseMutateFunction } from 'react-query'

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
}

export interface FollowingFollowersPropsType {
  userName: string | string[]
  search: string
}

export type FollowingFollowersComponentsType = {
  isModalOpen: boolean
} & Pick<ModalManagerType<StateModalFollowingFollowersType>, 'onClose'>

export interface FollowUnfollowButtonPropsInterface {
  useFollowUnfollowUser: UseMutateFunction<
    AxiosResponse<any, any>,
    unknown,
    string | undefined,
    unknown
  >
  isLoadingButton: boolean
  isRefetching: boolean
  followOrUnfollow: boolean
}
