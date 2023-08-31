import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { deleteFollowerUser } from '@/services'

export const useDeleteFollower = ({ refetch }: { refetch: () => void }) => {
  const client = useQueryClient()
  const { mutate: useDeleteFollowerUser, isLoading: isLoadingDeleteUser } = useMutation(
    ['del-follower'],
    (userId: number) => deleteFollowerUser(userId),
    {
      onSuccess: () => {
        refetch()
        client.invalidateQueries({ queryKey: ['get-profile-page'] })
      },
      onError: (err: Error) => toast.error(err.message),
    }
  )

  return {
    useDeleteFollowerUser,
    isLoadingDeleteUser,
  }
}
