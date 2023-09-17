import { useState } from 'react'

import { IoNotificationsSharp } from 'react-icons/io5'

import { useGetNotifications, useGetNotReadNotifications } from '@/modules/notification-module'

export const Notification = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { dataNotifications } = useGetNotifications()
  const { dataNotReadNotifications } = useGetNotReadNotifications()

  return (
    <div className=" flex flex-col relative cursor-pointer ">
      <IoNotificationsSharp
        size={24}
        fill={isHovered ? '#397DF6' : '#fff'}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      {dataNotifications?.count && (
        <span className="absolute leading-6 font-medium text-[10px] top-0 right-0 bg-red-500 rounded-full w-3 h-3 flex items-center justify-center text-white">
          {dataNotifications.count}
        </span>
      )}
    </div>
  )
}
