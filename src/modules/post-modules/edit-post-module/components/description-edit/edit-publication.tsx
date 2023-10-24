import React, { FC } from 'react'

import { RightDescription } from '@/modules/create-post-module/components/description-add/rightDescription'
import { EditPostDescription } from '@/modules/post-modules/latest-posts-module/components/EditPostDescription'
import { PostImagesSlider } from '@/modules/post-modules/latest-posts-module/components/PostImagesSlider'

type AddPublicationType = {
  imageUrl: string
  location?: boolean
  callback?: () => void
  text?: string
  setText?: (newText: string) => void
}

export const EditPublication: FC<AddPublicationType> = ({ imageUrl, callback, text, setText }) => {
  return (
    <div className="flex flex-wrap w-[972px] justify-between min-h-[500px]">
      <div className="grid grid-cols-2 w-full">
        <div>
          <PostImagesSlider showIconDelete={true} />
        </div>

        {/*<RightDescription location={false} text={text} setText={setText} callback={callback} />*/}
        <EditPostDescription />
      </div>
    </div>
  )
}
