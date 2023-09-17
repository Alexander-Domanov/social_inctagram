import React from 'react'

import { twMerge } from 'tailwind-merge'

export const NotFoundComponent = ({
  message,
  className,
}: {
  message: string
  className?: string
}) => {
  return (
    <div
      className={twMerge(
        className,
        'text-base w-full text-light-100 flex justify-center leading-6 font-normal '
      )}
    >
      <span>{message}</span>
    </div>
  )
}
