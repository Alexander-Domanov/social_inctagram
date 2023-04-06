import { useMutation } from '@tanstack/react-query'

import { sendVerificationLink } from '@/modules/auth-modules/registraion-module/resend-verification-form/api/sendVerificationLink'

export const useSendVerifyEmailMutation = (setCustomError: any, reset: any, push: any) => {
  const { isLoading, mutate: resendVerification } = useMutation({
    mutationFn: sendVerificationLink,
    onSuccess: () => {
      reset()
      push('/')
    },
    onError: error => {
      // @ts-ignore
      setCustomError('email', error.response.data.messages[0].message)
    },
  })

  return {
    isLoading,
    resendVerification,
  }
}
