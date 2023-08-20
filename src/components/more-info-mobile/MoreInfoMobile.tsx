import React, { useState } from 'react'

import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { clsx } from 'clsx'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/router'
import { FaChevronDown } from 'react-icons/fa6'

import styles from './MoreInfoMobile.module.scss'

import more from '@/assets/icons/header/more-horizontal.svg'
import settings from '@/assets/icons/settings.svg'
import bookmark from '@/assets/icons/sidebar/bookmark-outline.svg'
import trending from '@/assets/icons/sidebar/trending-up-outline.svg'
import { useTranslation } from '@/components/translation'
import { LogoutButton } from '@/modules/auth-modules/login-module/logout'
import { routes } from '@/routing/router'

interface MoreInfoInterface {
  router: string
  name: string
  image: StaticImageData
}

export const MoreInfoMobile = () => {
  const { push } = useRouter()
  const { t } = useTranslation()
  const moreInfo: MoreInfoInterface[] = [
    {
      router: routes.myProfilePage.settings,
      name: t.profile.profilePage.buttonProfileSettings,
      image: settings,
    },
    { router: routes.sideBar.statistics, name: t.navBar.statistics, image: trending },
    { router: routes.sideBar.favorites, name: t.navBar.favorites, image: bookmark },
  ]
  const [isOpen, setIsOpen] = useState(false)

  const onOpenChange = (open: boolean) => {
    setIsOpen(open)
  }

  const onSelectLanguage = (router: string) => {
    push(router)
  }

  return (
    <>
      <DropdownMenu.Root modal={false} onOpenChange={onOpenChange}>
        <DropdownMenu.Trigger className={'z-40'} asChild>
          <button className={styles.DropDownMenuTrigger}>
            <div className={styles.DropDownMenuFlag}>
              <Image src={more} alt={'more info'} />
            </div>
            <FaChevronDown
              color="#fff"
              size={16}
              className={clsx('xsm:ml-0.5 ml-auto', { 'rotate-180': isOpen })}
            />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content
            side={'bottom'}
            align={'start'}
            sideOffset={-1}
            className={styles.DropDownMenuContent}
          >
            {moreInfo.map(more => (
              <DropdownMenu.Item
                className={styles.DropDownMenuItem}
                onSelect={() => onSelectLanguage(more.router)}
                key={more.router}
              >
                <div className={styles.DropDownMenuFlag}>
                  <Image src={more.image} alt={more.name} />
                </div>
                <span className="">{more.name}</span>
              </DropdownMenu.Item>
            ))}
            <DropdownMenu.Item
              className={styles.DropDownMenuItem}
              onSelect={() => onSelectLanguage(more.router)}
              key={more.router}
            >
              <div className="w-full flex">
                <LogoutButton />
              </div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </>
  )
}
