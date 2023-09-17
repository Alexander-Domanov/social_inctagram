import { useMutation } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { noRefetch } from '@/common'
import { putPostAddView_api } from '@/services/api/posts_api/putPostAddView_api'

export const usePutPostAddView = () => {
  const { mutate: useAddView } = useMutation(
    ['add-view'],
    (postId: number) => putPostAddView_api(postId),
    {
      onSuccess: () => {},
      onError: (err: Error) => toast.error(err.message),
      retry: 0,
      ...noRefetch,
    }
  )

  return {
    useAddView,
  }
}
