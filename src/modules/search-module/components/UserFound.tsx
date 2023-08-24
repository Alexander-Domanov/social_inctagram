import { Placeholder } from '@/ui'
import { UserItemInterface } from 'src/modules/search-module'

export const UserFound = ({
  userItems,
  redirectToUserProfilePage,
}: {
  userItems: UserItemInterface[]
  redirectToUserProfilePage: (value: string | null, userId: string | null) => void
}) => {
  return (
    <div className="flex pt-4 flex-col gap-4">
      {userItems &&
        userItems.map((user: UserItemInterface, index) => {
          return (
            <div key={index} className="flex items-center gap-3">
              <Placeholder
                className={'cursor-default object-cover rounded-full'}
                height={48}
                width={48}
                alt={'alt'}
                src={user.avatars?.thumbnail.url || null}
              />
              <div className="flex flex-col text-light-100 text-sm leading-6 font-normal">
                <span
                  onClick={() => redirectToUserProfilePage(user.userName, user.id.toString())}
                  className="linkText"
                >
                  {user.userName}
                </span>
                <span className="text-light-900 break-all">{`${
                  user.firstName ? user.firstName : 'Not first name'
                } ${user.lastName ? user.lastName : 'Not last name'}`}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}
