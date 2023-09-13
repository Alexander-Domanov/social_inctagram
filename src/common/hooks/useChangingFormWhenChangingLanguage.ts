import { useEffect } from 'react'

export const useChangingFormWhenChangingLanguage = ({
  trigger,
  localeLanguage,
}: {
  trigger: () => void
  localeLanguage: string
}) => {
  useEffect(() => {
    trigger()
  }, [localeLanguage])
}
