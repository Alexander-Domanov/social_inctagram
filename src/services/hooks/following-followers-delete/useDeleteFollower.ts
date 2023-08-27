import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { deleteFollowerUser } from '@/services'

export const useDeleteFollower = ({ refetch }: { refetch: () => void }) => {
  const { mutate: useDeleteFollowerUser, isLoading } = useMutation(
    ['del-follower'],
    (userId: number) => deleteFollowerUser(userId),
    { onSuccess: () => refetch(), onError: (err: Error) => toast.error(err.message) }
  )

  return {
    useDeleteFollowerUser,
    isLoading,
  }
}
