import { useMutation, useQuery } from "@tanstack/react-query";

import { authAPI } from '@/services/api/auth/authAPI'
import { noRefetch } from "@/helpers/no-refetch";

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: authAPI.login,
  })
}

export const useRecoveryEmailResending = (email: string) => {
  return useMutation({
    mutationFn: () => authAPI.passwordRecoveryEmailResending({ email }),
  });
}

export const useCreateNewPasswordMutation = () => {
  return useMutation({
    mutationFn: authAPI.createNewPassword,
  })
}

export const useRegistrationEmailResendingMutation = (email: string) => {
  return useMutation({
    mutationFn: () => authAPI.registrationEmailResending({ email }),
  });
}

export const useRegistrationConfirmationQuery = (confirmationCode: string) => {
  return useQuery({
    queryKey: ["regConfirmation"],
    queryFn: () => authAPI.registrationConfirmation({ confirmationCode}),
    enabled: confirmationCode !== "undefined",
    retry: false,
    ...noRefetch
  });
}
