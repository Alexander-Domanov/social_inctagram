import React from 'react'

import { useQuery } from '@tanstack/react-query'

import { getFollowersData } from '@/modules/my-profile-modules/profile-page-module/api/getFollowers'
import { useGetFollowers } from '@/modules/my-profile-modules/profile-page-module/hoos/useGetFollowers'
import { userGetFollowings } from '@/modules/my-profile-modules/profile-page-module/hoos/userGetFollowings'
import { useSearch } from '@/modules/search-module'
import { InputSearch } from '@/ui'
import {ScrollArea, ScrollBar} from '@/ui/scrollArea/ScrollArea'

export const ScrollAreaDemo = ({ userName }: { userName: string }) => {
  const { search, searchInput, setSearchInput } = useSearch()

  const { data } = userGetFollowings({ userName, search })
  const asd = () => ''

  console.log(data)
  const tags = Array.from({ length: 50 }).map(
      (_, i, a) => `v1.2.0-beta.${a.length - i}`
  )

  return (
    <ScrollArea className="h-56 w-56 bg-danger-500 rounded-md border">
      <div className={'w-full p-5'}>
        <InputSearch
          className="h-9 w-full"
          placeholder={'Search'}
          value={searchInput}
          callBackSearch={setSearchInput}
        />
        {tags.map((tag) => (
            <>
              <div className="text-sm text-light-100">{tag}</div>
              {/*<Separator className="my-2" />*/}
            </>
        ))}
      </div>
      {/*<div className="p-4 flex justify-between text-light-100 leading-6 font-semibold text-bas">*/}
      {/*  <div className=" flex gap-3 items-center">*/}
      {/*    <Avatar src={null} width={36} height={36} alt={''} />*/}
      {/*    <span>URLProfile</span>*/}
      {/*  </div>*/}
      {/*  <div className="flex items-center gap-10">*/}
      {/*    <GlobalButton className="max-w-[98px]" type={'button'} variant={'default'}>*/}
      {/*      <span>Follow</span>*/}
      {/*    </GlobalButton>*/}
      {/*    <GlobalButton className="max-w-[98px]" type={'button'} variant={'gray'}>*/}
      {/*      <span>Delete</span>*/}
      {/*    </GlobalButton>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </ScrollArea>
  )
}
