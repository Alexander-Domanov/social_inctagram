import { useState } from 'react'

import { UseMutateFunction } from 'react-query'

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const onConfirmModal = <T>({
    onConfirmAction,
    value,
  }: {
    onConfirmAction: UseMutateFunction<any, Error, T, unknown>
    value: T | null
  }) => {
    if (value) {
      onConfirmAction(value)
    }
    setIsModalOpen(false)
  }

  const onCloseModal = () => {
    setIsModalOpen(false)
  }
  const onDeclineModal = onCloseModal

  return { isModalOpen, onConfirmModal, onDeclineModal, setIsModalOpen }
}
