import { useEffect } from 'react'

import { FieldErrors } from 'react-hook-form'

export const useChangingFormWhenChangingLanguage = ({
  trigger,
  localeLanguage,
  errors,
}: {
  trigger: () => void
  localeLanguage: string
  errors: FieldErrors
}) => {
  useEffect(() => {
    if (typeof errors?.root?.message === 'string' && errors.root.message.length > 0) {
      trigger()
    }
  }, [localeLanguage])
}
