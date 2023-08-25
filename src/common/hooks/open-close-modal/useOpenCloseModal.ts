import { Dispatch, SetStateAction, useState } from 'react'

import { useRouter } from 'next/router'

type UseOpenCloseModalProps = {
  closeOnRouteChange?: boolean
}

export const useOpenCloseModal = <M = undefined>({
  closeOnRouteChange,
}: UseOpenCloseModalProps): {
  modalOpen: M
  setModalOpen: Dispatch<SetStateAction<M>>
  onCloseClick: () => void
} => {
  const [modalOpen, setModalOpen] = useState<M>(undefined as M)
  const { replace, pathname } = useRouter()
  const onCloseClick = () => {
    setModalOpen(undefined as M)

    if (closeOnRouteChange) {
      replace(pathname)
    }
  }

  return { modalOpen, setModalOpen, onCloseClick }
}
