import React, { FC } from 'react'

// eslint-disable-next-line import/no-named-as-default
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import bookmarkOutline from '@/assets/icons/sidebar/bookmark-outline.svg'
import bookmark from '@/assets/icons/sidebar/bookmark.svg'
import homeOutline from '@/assets/icons/sidebar/home-outline.svg'
import home from '@/assets/icons/sidebar/home.svg'
import messengerOutline from '@/assets/icons/sidebar/message-circle-outline.svg'
import messenger from '@/assets/icons/sidebar/message-circle.svg'
import personOutline from '@/assets/icons/sidebar/person-outline.svg'
import person from '@/assets/icons/sidebar/person.svg'
import searchOutline from '@/assets/icons/sidebar/search-outline.svg'
import search from '@/assets/icons/sidebar/search.svg'
import trendingOutline from '@/assets/icons/sidebar/trending-up-outline.svg'
import trending from '@/assets/icons/sidebar/trending-up.svg'
import { useTranslation } from '@/components/translation'
import { LogoutButton } from '@/modules/auth-modules/login-module/logout'
import { routes } from '@/routing/router'
import { CreatePost } from 'src/modules/create-post-module'

export const Sidebar: FC = () => {
  const { pathname } = useRouter()
  const { t } = useTranslation()
  // CSS Styles
  const className = {
    home: clsx(
      pathname === routes.sideBar.home ? 'text-accent-500' : '',
      'flex gap-[15px] items-center'
    ),
    myProfile: clsx(
      pathname === routes.sideBar.profile ? 'text-accent-500' : '',
      'flex gap-[15px] items-center'
    ),
    messenger: clsx(
      pathname === routes.sideBar.messenger ? 'text-accent-500' : '',
      'flex gap-[15px] items-center'
    ),
    search: clsx(
      pathname === routes.sideBar.search ? 'text-accent-500' : '',
      'flex gap-[15px] items-center'
    ),
    statistics: clsx(
      pathname === routes.sideBar.statistics ? 'text-accent-500' : '',
      'flex gap-[15px] items-center mt-14'
    ),
    favorites: clsx(
      pathname === routes.sideBar.favorites ? 'text-accent-500' : '',
      'flex gap-[15px] items-center'
    ),
    logout: clsx(
      pathname === routes.sideBar.favorites ? 'text-accent-500' : '',
      'flex mt-[180px] items-center'
    ),
    hidden: 'xsm:hidden sm:hidden',
    hiddenSettings: clsx(pathname === routes.myProfilePage.settings && 'xsm:hidden'),
  }

  return (
    <aside
      className={`xsm:fixed xsm:bottom-0 xsm:max-w-full sticky max-w-[320px] w-full border-r-[1px] border-r-bgLogBorder z-50 ${className.hiddenSettings}`}
    >
      <div className="xsm:bottom-0 xsm:bg-dark-700 z-[999] xsm:w-full xsm:border-dark-300 xsm:border-t-[1px] xsm:justify-center xsm:h-[60px] xsm:py-0  xsm:fixed text-light-100 font-medium flex flex-col items-center justify-between py-[72px] h-full">
        <ul className="xsm:flex-row list-none flex gap-6 flex-col">
          <li>
            <Link href={routes.sideBar.home} className={className.home}>
              <Image
                src={pathname === routes.sideBar.home ? home : homeOutline}
                alt={t.navBar.home}
                height={24}
                width={24}
              />
              <span className={className.hidden}>{t.navBar.home}</span>
            </Link>
          </li>
          <li>
            <CreatePost />
          </li>
          <li className="xsm:order-4">
            <Link href={routes.sideBar.profile} className={className.myProfile}>
              <Image
                src={pathname === routes.sideBar.profile ? person : personOutline}
                alt={t.navBar.myProfile}
                height={24}
                width={24}
              />
              <span className={className.hidden}>{t.navBar.myProfile}</span>
            </Link>
          </li>
          <li className="xsm:order-1">
            <Link href={routes.sideBar.messenger} className={className.messenger}>
              <Image
                src={pathname === routes.sideBar.messenger ? messenger : messengerOutline}
                alt={t.navBar.messenger}
                height={24}
                width={24}
              />
              <span className={className.hidden}>{t.navBar.messenger}</span>
            </Link>
          </li>
          <li className="xsm:order-2">
            <Link href={routes.sideBar.search} className={className.search}>
              <Image
                src={pathname === routes.sideBar.search ? search : searchOutline}
                alt={t.navBar.search}
                height={24}
                width={24}
              />
              <span className={className.hidden}>{t.navBar.search}</span>
            </Link>
          </li>
          <li className="xsm:hidden">
            <Link href={routes.sideBar.statistics} className={className.statistics}>
              <Image
                src={pathname === routes.sideBar.statistics ? trending : trendingOutline}
                alt={t.navBar.statistics}
                height={24}
                width={24}
              />
              <span className={className.hidden}>{t.navBar.statistics}</span>
            </Link>
          </li>
          <li className="xsm:hidden">
            <Link href={routes.sideBar.favorites} className={className.favorites}>
              <Image
                src={pathname === routes.sideBar.favorites ? bookmark : bookmarkOutline}
                alt={t.navBar.favorites}
                height={24}
                width={24}
              />
              <span className={className.hidden}>{t.navBar.favorites}</span>
            </Link>
          </li>
          <li className={`xsm:hidden ${className.logout}`}>
            <LogoutButton />
          </li>
        </ul>
      </div>
    </aside>
  )
}
