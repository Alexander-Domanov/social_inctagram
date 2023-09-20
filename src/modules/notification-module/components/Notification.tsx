import React, { Fragment, useState } from 'react'

import { formatDistance, parseISO } from 'date-fns'
import { IoNotificationsSharp } from 'react-icons/io5'

import { localTimeDisplayLanguageInThePost, useInViewScrollEffect } from '@/common'
import { RenderLoadingIndicator } from '@/components/infinity-scroll'
import { useTranslation } from '@/components/translation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import {
  useGetNotifications,
  useGetNotReadNotifications,
  useReadMarkAsReadNotification,
} from '@/modules/notification-module'

export const Notification = () => {
  const [isHovered, setIsHovered] = useState(false)
  const { dataNotifications } = useGetNotifications()
  const {
    dataNotReadNotifications,
    hasNextPageNotReadNotifications,
    fetchNextPageNotReadNotifications,
    isSuccessNotReadNotifications,
    isFetchNextPageNotReadNotifications,
  } = useGetNotReadNotifications()
  const { useMarkAsReadNotification } = useReadMarkAsReadNotification()
  const { localeLanguage } = useTranslation()
  const localeTime: Locale | undefined = localTimeDisplayLanguageInThePost[localeLanguage || 'en']

  const handlerMarkAsReadNotification = (id: number) => {
    useMarkAsReadNotification(id)
  }

  const { ref } = useInViewScrollEffect({
    hasNextPage: hasNextPageNotReadNotifications,
    fetchNextPage: fetchNextPageNotReadNotifications,
  })

  return (
    <div className=" flex flex-col relative">
      <TooltipProvider>
        <Tooltip delayDuration={20}>
          <TooltipTrigger>
            <IoNotificationsSharp
              size={24}
              fill={isHovered ? '#397DF6' : '#fff'}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="cursor-pointer"
            />
            {dataNotifications?.count && (
              <span className="absolute leading-6 font-medium text-[10px] top-0 right-0 bg-red-500 rounded-full w-3 h-3 flex items-center justify-center text-white">
                {dataNotifications.count}
              </span>
            )}
          </TooltipTrigger>
          <TooltipContent
            sideOffset={10}
            className="bg-dark-500 border-2 border-dark-100 rounded w-[355px] "
          >
            <span className="text-light-100 text-base leading-6 mt-3">Уведомления</span>
            <Separator className="mt-3 bg-dark-100 font-medium" />
            <ScrollArea className={'text-light-100 h-[424px] '}>
              {dataNotReadNotifications?.pages &&
                dataNotReadNotifications?.pages.map(page =>
                  page.items.map((notification, index) => (
                    <Fragment key={index}>
                      <div className="flex flex-col pt-3">
                        <div
                          onClick={() => handlerMarkAsReadNotification(notification.id)}
                          className="text-base cursor-pointer  font-normal leading-4"
                        >
                          <span>{notification.title}!</span>
                          {!notification.isRead && (
                            <span className="ml-1 text-accent-500">New</span>
                          )}
                        </div>
                        <span
                          onClick={() => handlerMarkAsReadNotification(notification.id)}
                          className="font-bold cursor-pointer text-sm leading-6 pt-3"
                        >
                          {notification.message}
                        </span>
                        <span className="text-light-900 font-normal leading-6 text-xs">
                          {formatDistance(parseISO(notification.createdAt), new Date(), {
                            addSuffix: true,
                            locale: localeTime,
                          })}
                        </span>
                      </div>
                      <Separator className="mt-3 bg-dark-100 font-medium" />
                    </Fragment>
                  ))
                )}
              <RenderLoadingIndicator
                isSuccess={isSuccessNotReadNotifications}
                isFetchNextPage={isFetchNextPageNotReadNotifications}
                customRef={ref}
              />
            </ScrollArea>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}
