import { useQuery } from '@tanstack/react-query'

import { getUserProfile, userProfilePageData, userQueryType } from '@/modules/user-profile-module'

export const useGetUserProfileData = (userNameQuery: userQueryType) => {
  const {
    data: userProfileData,
    isLoading,
    refetch,
    isFetching,
    isRefetching,
  } = useQuery({
    queryKey: ['get-user-profile-page-page', userNameQuery],
    queryFn: () => getUserProfile(userNameQuery),
    select: (data: any): userProfilePageData => data?.data,
    staleTime: 0,
  })

  const initialUserProfileData = {
    id: userProfileData?.id,
    userName: userProfileData?.userName || '',
    firstName: userProfileData?.firstName || '',
    lastName: userProfileData?.lastName || '',
    city: userProfileData?.city || '',
    dateOfBirth: userProfileData?.dateOfBirth ? new Date(userProfileData?.dateOfBirth) : new Date(),
    aboutMe: userProfileData?.aboutMe || '',
    followingCount: userProfileData?.followingCount || 0,
    followersCount: userProfileData?.followersCount || 0,
    publicationsCount: userProfileData?.publicationsCount || 0,
    isFollowing: userProfileData?.isFollowing || false,
    isFollowingBy: userProfileData?.isFollowedBy || false,
  }

  const userProfileAvatar = userProfileData?.avatars?.medium.url || ''

  return {
    userProfileData: initialUserProfileData,
    userProfileAvatar,
    isLoading,
    refetch,
    isFetching,
    isRefetching,
  }
}
