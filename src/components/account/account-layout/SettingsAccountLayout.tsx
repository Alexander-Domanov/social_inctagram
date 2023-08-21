import React, { FC, ReactNode } from 'react'
type PropsType = {
  children: ReactNode
}

export const SettingsAccountLayout: FC<PropsType> = ({ children }) => {
  return (
    <div className="flex gap-10 w-full pt-5 sm:flex-col">
      {children}
      <div className="w-full bg-bgLogBorder h-[1px] absolute bottom-[72px] sm:hidden"></div>
    </div>
  )
}
