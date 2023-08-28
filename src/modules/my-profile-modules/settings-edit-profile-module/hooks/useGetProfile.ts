import { useGetProfileData } from '@/modules/my-profile-modules/settings-edit-profile-module'

export const useGetProfile = () => {
  const { data: profileData, isFetching: isFetchingProfileData, isLoading } = useGetProfileData()

  const initialProfileData = {
    userName: profileData?.userName || '',
    firstName: profileData?.firstName || '',
    lastName: profileData?.lastName || '',
    city: profileData?.city || '',
    dateOfBirth: profileData?.dateOfBirth ? new Date(profileData?.dateOfBirth) : new Date(),
    aboutMe: profileData?.aboutMe || '',
    followings: profileData?.followingCount || 0,
    followers: profileData?.followersCount || 0,
    publications: profileData?.publicationsCount || 0,
  }
  const profileAvatar = profileData?.avatars?.medium?.url || ''

  return {
    profileData: initialProfileData,
    profileAvatar,
    isFetchingProfileData,
    isLoading,
  }
}
