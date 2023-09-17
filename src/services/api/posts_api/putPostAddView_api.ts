import { authInstance } from '@/services'

export const putPostAddView_api = async (postId: number) => {
  return await authInstance.put(`posts/${postId}/add-view`)
}
