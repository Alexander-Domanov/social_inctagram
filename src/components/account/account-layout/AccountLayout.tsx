import React, { FC, ReactNode } from 'react'

export const AccountLayout: FC<{ children: ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={`max-w-[750px] w-full'${className}`}>{children}</div>
}
