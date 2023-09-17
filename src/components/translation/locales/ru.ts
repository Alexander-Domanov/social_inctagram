import { pluralizeRu } from '@/common'
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
      getCountFollower(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'one':
            return `${count} Подписчик`
          case 'few':
            return `${count} Подписчика`
          case 'many':
            return `${count} Подписчиков`
        }
      },
      getCountFollowing(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'one':
            return `${count} Подписка`
          case 'few':
            return `${count} Подписки`
          case 'many':
            return `${count} Подписок`
        }
      },
      getCountFollowerPage(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'one':
            return `Подписчик`
          case 'few':
            return `Подписчика`
          case 'many':
            return `Подписчиков`
        }
      },
      getCountFollowingPage(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'one':
            return `Подписка`
          case 'few':
            return `Подписки`
          case 'many':
            return `Подписок`
        }
      },
      getCountPublicationPage(count: number): string | undefined {
        const str = pluralizeRu(count)

        switch (str) {
          case 'one':
            return `Публикация`
          case 'few':
            return `Публикации`
          case 'many':
            return `Публикаций`
        }
      },

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
  homepage: {
    viewComments: 'Посмотреть все комментарии',
  },
  likes: {
    getCountTitleLikes(count: number) {
      const str = pluralizeRu(count)

      switch (str) {
        case 'other':
          return `${count} Нравится`
        case 'one':
          return `${count} Нравится`
        case 'few':
          return `${count} Нравится`
        case 'many':
          return `${count} Нравится`
      }
    },
    getCountLikes(count: number): string | undefined {
      const str = pluralizeRu(count)

      switch (str) {
        case 'other':
          return 'Нравится'
        case 'one':
          return `Нравится`
        case 'few':
          return `Нравится`
        case 'many':
          return `Нравится`
      }
    },
  },
  addCommentForm: {
    addComment: 'Добавить комментарий...',
    addAnswer: 'Добавить ответ...',
    publish: 'Опубликовать',
  },
  postActions: {
    follow: 'Подписаться',
    unFollow: 'Отписаться',
    deletePost: 'Удалить пост',
    editPost: 'Редактировать пост',
    report: 'Пожаловаться',
  },
  PostCommentAnswers: {
    answer: 'Ответ',
    getCountShowAnswers(count: number) {
      const str = pluralizeRu(count)

      switch (str) {
        case 'other':
          return `Показать ответы (${count})`
        case 'one':
          return `Показать ответ (${count})`
        case 'few':
          return `Показать ответы (${count})`
        case 'many':
          return `Показать ответы (${count})`
      }
    },
    getCountHideAnswers(count: number): string | undefined {
      const str = pluralizeRu(count)

      switch (str) {
        case 'other':
          return `Скрыть ответы (${count})`
        case 'one':
          return `Скрыть ответ (${count})`
        case 'few':
          return `Скрыть ответы (${count})`
        case 'many':
          return `Скрыть ответы (${count})`
      }
    },
  },
  auth: {
    signUp: 'Регистрация',
    singIn: 'Войти',
    email: 'Электронная почта',
    password: 'Пароль',
    confirm: {
      ok: 'ОК',
      titleEmail: 'Письмо отправлено',
      text: 'Мы отправили ссылку для подтверждения вашей электронной почты на',
    },
    login: {
      forgotPassword: 'Забыли пароль?',
      haveAccount: 'У вас нет аккаунта?',
      errors:
        'Неверный пароль, электронная почта или имя пользователя. Пожалуйста, попробуйте снова.',
    },
    registration: {
      userName: 'Имя пользователя',
      email: 'Электронная почта',
      password: 'Пароль',
      passwordConfirmation: 'Подтверждение пароля',
      confirmationMessage: 'Не получили подтверждение?',
      haveAccount: 'У вас уже есть аккаунт?',
      errors: {
        userName: {
          required: 'Поле "Имя пользователя" обязательно для заполнения',
          min: 'Минимальное количество символов - 6',
          max: 'Максимальное количество символов - 30',
        },
        email: {
          required: 'Поле "Email" обязательно для заполнения',
          email: 'email должен быть действительным адресом электронной почты',
        },
        password: {
          min: 'Минимальное количество символов - 6',
          max: 'Пароль должен содержать не более 20 символов',
        },
        confirmPassword: {
          min: 'Минимальное количество символов - 6',
          max: 'Пароль должен содержать не более 20 символов',
          password: 'Пароли не совпадают',
        },
      },
    },
  },
  statistics: {
    tabsTitle: { week: 'Неделя', month: 'Месяц' },
    pagesTitle: {
      title: 'Статистика',
      likes: 'Лайки',
      comments: 'Комментарии',
      publication: 'Просмотры публикации',
    },
    popUp: {
      getCountTitleLikes(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'other':
            return `${count} Лайков`
          case 'one':
            return `${count} Лайк`
          case 'few':
            return `${count} Лайков`
          case 'many':
            return `${count} Лайков`
        }
      },
      getCountTitleComments(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'other':
            return `${count} Комментариев`
          case 'one':
            return `${count} Комментарий`
          case 'few':
            return `${count} Комментария`
          case 'many':
            return `${count} Комментариев`
        }
      },
      getCountTitlePublication(count: number) {
        const str = pluralizeRu(count)

        switch (str) {
          case 'other':
            return `${count} Просмотров публикации`
          case 'one':
            return `${count} Просмотр публикации`
          case 'few':
            return `${count} Просмотра публикации`
          case 'many':
            return `${count} Просмотров публикации`
        }
      },
    },
  },
}
