import { useEffect } from 'react'

import { useUserStore } from '@/store'

export const useUpdateUserCounts = ({
  followersCount,
  followingCount,
}: {
  followersCount: number
  followingCount: number
}) => {
  const { setFollowersCount, setFollowingCount } = useUserStore()

  useEffect(() => {
    setFollowersCount(followersCount)
    setFollowingCount(followingCount)
  }, [followersCount, followersCount])
}
