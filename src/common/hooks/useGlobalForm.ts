import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { useTranslation } from '@/components/translation'

export const useGlobalForm = (schema: any) => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    trigger,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const { localeLanguage } = useTranslation()

  const setCustomError = (name: string, message: string) => {
    setError(name, {
      type: 'custom',
      message: message,
    })
  }

  return {
    register,
    reset,
    handleSubmit,
    errors,
    setCustomError,
    trigger,
  }
}
