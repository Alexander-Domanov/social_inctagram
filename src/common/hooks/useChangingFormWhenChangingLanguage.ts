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
    if (Object.values(errors).length > 0) {
      trigger()
    }
  }, [localeLanguage])
}
