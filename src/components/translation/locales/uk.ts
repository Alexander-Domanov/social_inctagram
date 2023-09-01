import { pluralizeUk } from '@/common'
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
      getCountFollower(count: number) {
        const str = pluralizeUk(count)

        switch (str) {
          case 'one':
            return `${count} підписник`
          case 'few':
            return `${count} підписника`
          case 'many':
            return `${count} підписників`
        }
      },

      getCountFollowing(count: number) {
        const str = pluralizeUk(count)

        switch (str) {
          case 'one':
            return `${count} підписка`
          case 'few':
            return `${count} підписки`
          case 'many':
            return `${count} підписок`
        }
      },
      getCountFollowerPage(count: number) {
        const str = pluralizeUk(count)

        switch (str) {
          case 'one':
            return `Підписник`
          case 'few':
            return `Підписника`
          case 'many':
            return `Підписників`
        }
      },

      getCountFollowingPage(count: number) {
        const str = pluralizeUk(count)

        switch (str) {
          case 'one':
            return `Підписка`
          case 'few':
            return `Підписки`
          case 'many':
            return `Підписок`
        }
      },
      getCountPublicationPage(count: number): string | undefined {
        const str = pluralizeUk(count)

        switch (str) {
          case 'one':
            return `Публікація`
          case 'few':
            return 'Публікації'
          case 'many':
            return 'Публікацій'
        }
      },
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
