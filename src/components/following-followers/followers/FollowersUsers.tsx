import React from 'react'

import { URLUsernameForModal } from '@/components/following-followers'
import { FollowersButtons } from '@/components/following-followers/followers/FollowersButtons'
import { FollowingsFollowersType } from '@/types'

export const FollowersUsers = ({ items }: { items: FollowingsFollowersType[] }) => {
  return (
    <>
      {items.map(item => (
        <div className="flex justify-between" key={item.userId}>
          <URLUsernameForModal
            avatartSrc={item.avatars?.thumbnail.url || null}
            userName={item.userName}
          />
          <FollowersButtons />
        </div>
      ))}
    </>
  )
}
