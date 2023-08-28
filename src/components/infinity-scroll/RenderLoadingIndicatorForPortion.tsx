import { Spinner } from '@/ui'

type RenderLoadingIndictorType = {
  isSuccess: boolean
  isFetchNextPage: boolean
  customRef: (node?: Element | null) => void
}
export const RenderLoadingIndicator = ({
  isSuccess,
  isFetchNextPage,
  customRef,
}: RenderLoadingIndictorType) => {
  return (
    <>
      {isSuccess && (
        <div className="pt-4 flex w-full justify-center pb-4" ref={customRef}>
          {isFetchNextPage && (
            <div>
              <Spinner />
            </div>
          )}
        </div>
      )}
    </>
  )
}
