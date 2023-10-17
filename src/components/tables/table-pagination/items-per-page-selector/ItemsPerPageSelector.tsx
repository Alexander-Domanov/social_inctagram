import { Dispatch, FC, SetStateAction } from 'react'

import { Select } from '@/ui'
import { SelectItem } from '@/ui/select/Select'

interface Props {
  pageSize: string
  setPageSize: Dispatch<SetStateAction<string>>
}

const perPageVariants = [10, 20, 30, 40, 50]

export const ItemsPerPageSelector: FC<Props> = ({ setPageSize, pageSize }) => {
  return (
    <>
      <Select<string> value={`${pageSize}`} setValue={setPageSize}>
        {perPageVariants.map(perPage => (
          <SelectItem value={`${perPage}`} key={perPage}>
            Show {perPage}
          </SelectItem>
        ))}
      </Select>
    </>
  )
}
