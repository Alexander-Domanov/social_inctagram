import React, { ChangeEvent, FC } from 'react'

import { useTranslation } from '@/components/translation'
import { Location } from '@/modules/create-post-module/components/location/location'
import { useGetProfile } from '@/modules/my-profile-modules/settings-edit-profile-module'
import { Avatar, GlobalButton, Textarea } from '@/ui'

const MAX_CHARACTERS = 500

type RightDescriptionType = {
  location?: boolean
  callback?: () => void
  text?: string
  setText?: (newText: string) => void
}

export const RightDescription: FC<RightDescriptionType> = ({
  location = true,
  callback,
  text,
  setText,
}) => {
  const { t } = useTranslation()
  const { textareaLabel, buttonSave } = t.createPost.addFullPost.description
  const { profileData, profileAvatar } = useGetProfile()
  const avatar = profileAvatar && profileAvatar
  const userName = profileData && profileData.userName

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (setText) {
      setText(e.currentTarget.value)
    }
  }

  return (
    <div className={'flex flex-col gap-3 w-full p-4'}>
      <div className={'flex items-center gap-3'}>
        <Avatar alt={'photoAvatar'} width={36} height={36} src={avatar} />
        <div className={'font-semibold'}>{userName}</div>
      </div>
      <div className={'w-[80%]'}>
        <Textarea
          textAreaClassName={'w-full bg-dark-500 resize-none bg-dark-500 border-dark-100'}
          maxLength={MAX_CHARACTERS}
          value={text}
          onChange={handleTextChange}
          label={textareaLabel}
        />
        <p className={'text-end text-light-900 text-xs'}>
          {text ? `${text.length} / ${MAX_CHARACTERS}` : '0 / 500'}
        </p>
      </div>

      {location ? (
        <Location />
      ) : (
        <GlobalButton callback={callback} type={'submit'} className={'flex self-end mt-auto'}>
          {buttonSave}
        </GlobalButton>
      )}
    </div>
  )
}
