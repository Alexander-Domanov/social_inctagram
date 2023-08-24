import React from 'react'

import { FollowingsButtons, URLUsernameForModal } from '@/components/following-followers'
import { FollowingsFollowersType } from '@/types'

export const FollowingUsers = ({ items }: { items: FollowingsFollowersType[] }) => {
  return (
    <>
      {items.map(item => (
        <div className="flex justify-between" key={item.userId}>
          <URLUsernameForModal
            avatartSrc={item.avatars?.thumbnail.url || null}
            userName={item.userName}
          />
          <FollowingsButtons />
        </div>
      ))}
    </>
  )
}
