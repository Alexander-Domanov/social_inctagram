import { useQuery } from '@tanstack/react-query'

import {
  getUserProfile,
  userNameQueryType,
  userProfilePageData,
} from '@/modules/profile-modules/user-profile-module'

export const useGetUserProfileData = (userNameQuery: userNameQueryType) => {
  const { data: userProfileData, isLoading } = useQuery({
    queryKey: ['get-user-profile-page', userNameQuery],
    queryFn: () => getUserProfile(userNameQuery),
    select: (data: any): userProfilePageData => data?.data,
  })

  const initialUserProfileData = {
    userName: userProfileData?.userName || '',
    firstName: userProfileData?.firstName || '',
    lastName: userProfileData?.lastName || '',
    city: userProfileData?.city || '',
    dateOfBirth: userProfileData?.dateOfBirth ? new Date(userProfileData?.dateOfBirth) : new Date(),
    aboutMe: userProfileData?.aboutMe || '',
    followingCount: userProfileData?.followingCount || 0,
    followersCount: userProfileData?.followersCount || 0,
    publicationsCount: userProfileData?.publicationsCount || 0,
  }

  const userProfileAvatar = userProfileData?.avatars?.medium.url || ''

  return {
    userProfileData: initialUserProfileData,
    userProfileAvatar,
    isLoading,
  }
}
