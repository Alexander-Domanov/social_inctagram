import { useTranslation } from '@/components/translation'
import { GetUserFoundInterface } from '@/modules/search-modules'
import { Placeholder } from '@/ui'

export const UserFound = ({ userInfoFound }: { userInfoFound: any[] }) => {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col pt-7 gap-4">
      <span className="text-base font-bold leading-6 text-light-100">
        {t.search.recentRequests}
      </span>
      {userInfoFound &&
        userInfoFound.map((user: GetUserFoundInterface, index) => {
          return (
            <div key={index} className="flex gap-3">
              <Placeholder
                className={'cursor-default object-cover rounded-full'}
                height={48}
                width={48}
                alt={'alt'}
                src={user.avatars || ''}
              />
              <div className="flex flex-col text-light-100 text-sm leading-6 font-normal">
                <span className="underline hover:text-accent-500 transition-colors outline-none">
                  {user.userName}
                </span>
                <span className="text-light-900">{`${
                  user.firstName ? user.firstName : 'Not first name'
                } ${user.lastName ? user.lastName : 'Not last name'}`}</span>
              </div>
            </div>
          )
        })}
    </div>
  )
}
