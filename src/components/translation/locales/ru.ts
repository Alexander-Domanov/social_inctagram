import { LocaleType } from '@/components/translation'

export const ru: LocaleType = {
  navBar: {
    home: 'Главная',
    create: 'Создать',
    myProfile: 'Мой профиль',
    messenger: 'Мессенджер',
    search: 'Поиск',
    statistics: 'Статистика',
    favorites: 'Избранное',
    logout: 'Выйти',
  },
  confirm: {
    buttonYes: 'Да',
    buttonNo: 'Нет',
  },
  profile: {
    profilePage: {
      buttonProfileSettings: 'Настройки профиля',
      following: 'Подписки',
      followers: 'Подписчики',
      delete: 'Удалить',
      Publications: 'Публикации',
      confirmTitleDeleteFollowing: 'Удалить подписку',
      confirmDescriptionDeleteFollowing: 'Вы действительно хотите удалить подписку на ',
    },
    settingsProfile: {
      settingsProfileTabs: {
        generalInformation: 'Общая информация',
        devices: 'Устройства',
        accountManagement: 'Управление аккаунтом',
        myPayments: 'Мои платежи',
      },
      generalInformation: {
        errors: {
          userName: 'Имя пользователя обязательно',
          dateOfBirthMax: 'Дата рождения не может быть в будущем',
          dateOfBirthTypeError: 'Дата рождения должна быть корректной датой',
          aboutMe: 'Не может превышать 200 символов',
        },
        userName: 'Имя пользователя',
        firstName: 'Имя',
        lastName: 'Фамилия',
        dateOfBirthday: 'Дата рождения',
        city: 'Город',
        aboutMe: 'Обо мне',
        buttonSaveChanges: 'Сохранить изменения',
      },
      devices: {},
    },
  },
  userProfile: {
    buttonMessage: 'Отправить сообщение',
    buttonFollow: 'Подписаться',
    buttonUnfollow: 'Отписаться',
  },
  search: {
    searchTitle: 'Поиск',
    searchInput: 'Поиск',
    recentRequests: 'Недавние запросы',
    noRequests: 'Нет недавних запросов',
    placeEmpty: 'Упс! Здесь выглядит пусто!',
  },
}
