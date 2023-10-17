import { FC, useState } from 'react'

import { format } from 'date-fns'
import { UAParserInstance } from 'ua-parser-js'

import { Device } from '../api/devices-api'
import { BrowserIconSwitch } from '../components/BrowserIconSwitch'
import { useDeleteSession } from '../hooks/useDeleteSession'

import { Confirm } from '@/components/modals'
import { useTranslation } from '@/components/translation'
import { localTimeLastVisit } from '@/modules/my-profile-modules/devices-module'
import { GlobalButton } from '@/ui'

type Props = {
  device: Device & UAParserInstance
}

export const OtherDevice: FC<Props> = ({ device }) => {
  const [isConfirmOpened, setIsConfirmOpened] = useState(false)
  const { mutate, isLoading } = useDeleteSession(device.deviceId)
  const { t, localeLanguage } = useTranslation()
  const localeTime: Locale | undefined = localTimeLastVisit[localeLanguage || 'en']
  const onConfirm = () => {
    setIsConfirmOpened(false)
    mutate()
  }

  const onConfirmClose = () => {
    setIsConfirmOpened(false)
  }

  return (
    <div className="border-dark-100 border rounded-sm py-6 px-4 mt-3" key={device.deviceId}>
      <div className="grid gap-3 grid-cols-[36px_1fr_auto]">
        <div>
          <BrowserIconSwitch browser={device.getBrowser()} size={36} color={'#fff'} />
        </div>

        <div>
          <div className="text-base font-bold text-white">
            {`${device.getBrowser().name} (${device.getOS().name} ${device.getOS().version})`}
          </div>

          <div className="mt-3 text-sm text-white">ip: {device.ip}</div>

          <div className="mt-2 text-sm text-white font-medium">
            {t.profile.settingsProfile.devices.otherDevice.lastVisit.title}:
            {format(new Date(device.lastVisit), ' dd.MM.yyyy HH:mm:ss', {
              locale: localeTime,
            })}
          </div>
        </div>

        <div className="self-center">
          <GlobalButton
            callback={() => setIsConfirmOpened(true)}
            type={'button'}
            variant={'transparent'}
            disabled={isLoading}
          >
            {t.profile.settingsProfile.devices.otherDevice.buttonLogout}
          </GlobalButton>

          <Confirm
            isOpen={isConfirmOpened}
            onConfirm={onConfirm}
            onClose={onConfirmClose}
            title={t.profile.settingsProfile.devices.otherDevice.confirm.title}
            text={t.profile.settingsProfile.devices.otherDevice.confirm.text}
            declineButtonText={t.profile.settingsProfile.devices.otherDevice.confirm.buttonDecline}
            onDecline={onConfirmClose}
          />
        </div>
      </div>
    </div>
  )
}
