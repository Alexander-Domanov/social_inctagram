import { LocaleType } from '@/components/translation'

export const uk: LocaleType = {
  navBar: {
    home: 'Головна сторінка',
    create: 'Створити',
    myProfile: 'Мій профіль',
    messenger: 'Месенджер',
    search: 'Пошук',
    statistics: 'Статистика',
    favorites: 'Обране',
    logout: 'Вийти',
  },
  confirm: {
    buttonYes: 'Так',
    buttonNo: 'Ні',
  },
  profile: {
    profilePage: {
      buttonProfileSettings: 'Налаштування профілю',
      following: 'Підписки',
      followers: 'Підписники',
      delete: 'Видалити',
      Publications: 'Публікації',
      confirmTitleDeleteFollowing: 'Видалити підписку',
      confirmDescriptionDeleteFollowing: 'Ви дійсно бажаєте видалити підписку на ',
    },
    settingsProfile: {
      settingsProfileTabs: {
        generalInformation: 'Загальна інформація',
        devices: 'Пристрої',
        accountManagement: 'Керування обліковим записом',
        myPayments: 'Мої платежі',
      },
      generalInformation: {
        errors: {
          userName: "Ім'я користувача є обов'язковим",
          dateOfBirthMax: 'Дата народження не може бути у майбутньому',
          dateOfBirthTypeError: 'Дата народження повинна бути коректною датою',
          aboutMe: 'Не може перевищувати 200 символів',
        },
        userName: "Ім'я користувача",
        firstName: "Ім'я",
        lastName: 'Прізвище',
        dateOfBirthday: 'Дата народження',
        city: 'Місто',
        aboutMe: 'Про мене',
        buttonSaveChanges: 'Зберегти зміни',
      },
      devices: {},
    },
  },
  userProfile: {
    buttonMessage: 'Надіслати повідомлення',
    buttonFollow: 'Підписатися',
    buttonUnfollow: 'Відписатися',
  },
  search: {
    searchTitle: 'Пошук',
    searchInput: 'Пошук',
    recentRequests: 'Останні запити',
    noRequests: 'Немає останніх запитів',
    placeEmpty: 'Ой! Тут виглядає порожньо!',
  },
}
