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
    headTitle: 'Профиль',
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
      headTitle: 'Настройки профиля',
      settingsProfileTabs: {
        generalInformation: {
          titleTab: 'Общая информация',
          userName: {
            label: 'Имя пользователя',
            min: 'Минимальное количество символов 6',
            max: 'Максимальное количество символов 30',
            matches: 'Разрешены только символы 0-9, A-Z, a-z, _, -',
            required: 'Имя пользователя обязательно',
          },
          firstName: {
            label: 'Имя',
            min: 'Минимальное количество символов 1',
            max: 'Максимальное количество символов 50',
            matches: 'Разрешены только буквы',
          },
          lastName: {
            label: 'Фамилия',
            min: 'Минимальное количество символов 1',
            max: 'Максимальное количество символов 50',
            matches: 'Разрешены только буквы',
          },
          dateOfBirthday: {
            label: 'Дата рождения',
            max: 'Дата рождения не может быть в будущем',
            typeError: 'Дата рождения должна быть валидной',
          },
          city: 'Город',
          aboutMe: { label: 'О себе', max: 'Не может содержать более 200 символов' },
          buttonSaveChanges: 'Сохранить изменения',
        },
        generalInformationTab: 'Общая информация',
        devices: 'Устройства',
        accountManagement: 'Управление аккаунтом',
        myPayments: 'Мои платежи',
      },
      devices: {
        buttonDevices: 'Завершить все другие сеансы',
        titleDevices: 'Эти устройства',
        online: 'Онлайн',
        activeSession: 'Активные сеансы',
        confirm: {
          title: 'Завершить все другие сеансы?',
          text: 'Вы уверены, что хотите завершить все другие сеансы?',
          buttonDecline: 'Нет',
        },
        otherDevice: {
          lastVisit: {
            title: 'Последнее посещение',
          },
          buttonLogout: 'Выйти',
          confirm: {
            title: 'Завершить сеанс?',
            text: 'Вы уверены, что хотите завершить сеанс?',
            buttonDecline: 'Нет',
          },
        },
      },
      accountManagement: {
        currentSubscription: {
          currentSubscription: 'Текущие подписки:',
          datePayment: 'Дата платежа',
          endDateSub: 'Дата окончания подписки',
          autoRenewal: 'Автоматическое продление',
        },
        accountType: {
          titleAccountType: 'Тип аккаунта:',
          personal: 'Личный',
          business: 'Бизнес',
        },
        subscriptionType: {
          titleSub: 'Выберите подписку:',
        },
        paymentMethods: {
          confirm: {
            buttonOk: 'Ок',
            text: 'Ой, санкции! 🙈',
          },
        },
        paymentsConfirmationModals: {
          confirm: {
            titleSuccess: 'Успех',
            buttonTextSuccess: 'Ок',
            textSuccess: 'Платеж прошел успешно!',
            titleError: 'Ошибка',
            buttonTextError: 'Вернуться к оплате',
            textError: 'Транзакция не удалась, пожалуйста, попробуйте еще раз',
          },
        },
      },
    },
  },
  uploadPhoto: {
    buttonAddPhoto: 'Добавить фото профиля',
    uploadAvatarBlock: { title: 'Добавить фото профиля' },
    profileAvatarEditor: { buttonSave: 'Сохранить' },
    photoSelector: { buttonSelectComputer: 'Выбрать с компьютера' },
  },
  userProfile: {
    buttonMessage: 'Отправить сообщение',
    buttonFollow: 'Подписаться',
    buttonUnfollow: 'Отписаться',
  },
  search: {
    headTitle: 'Поиск',
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
      title: 'Вход',
      forgotPassword: 'Забыли пароль?',
      haveAccount: 'У вас нет аккаунта?',
      errorsSchema: {
        email: 'Поле Email обязательно для заполнения',
        password: 'Поле Пароль обязательно для заполнения',
      },
      customErrors:
        'Неверный пароль, электронная почта или имя пользователя. Пожалуйста, попробуйте снова.',
    },
    registration: {
      title: 'Зарегистрироваться',
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
      resendForm: {
        title: 'Форма повторной отправки',
        resendLink: 'Отправить повторно ссылку для верификации',
        email: 'Электронная почта',
        send: 'Отправить',
        error: {
          email: 'Email является обязательным полем',
        },
      },
      externalAccount: {
        titlePage: 'Внешний аккаунт',
        title: 'Объединение аккаунтов',
        description: (email: string): string =>
          `Пользователь с адресом электронной почты:${email} уже существует в системе. Хотите объединить эти аккаунты?`,
        buttonYes: 'Да, объединить',
        buttonNo: 'нет',
        modalConfirm: { title: 'Объединение аккаунтов', buttonOk: 'Ок' },
      },
    },
    forgotPassword: {
      title: 'Забыли пароль',
      backToSignIn: 'Вернуться к Входу',
      description: 'Введите ваш адрес электронной почты, и мы отправим вам дальнейшие инструкции',
      buttonSend: 'Отправить инструкции',
      modal: {
        title: 'Письмо отправлено',
        text: {
          getDescription(email: string | undefined) {
            return `Ссылка была отправлена на вашу электронную почту ${email}. Если вы не получили письмо, отправьте ссылку еще раз.`
          },
        },
      },
      error: {
        required: 'Поле Email обязательно для заполнения',
        email: 'Недопустимый формат Email',
      },
    },
    registrationConfirmation: {
      emailSuccessMessage: {
        headTitle: 'Подтверждение Email',
        title: 'Поздравляем!',
        description: 'Ваш email был подтвержден',
        signIn: 'Войти',
      },
      ResendingVerificationLink: {
        headTitle: 'Срок действия ссылки для подтверждения Email истек',
        title: 'Срок действия ссылки для подтверждения Email истек',
        description:
          'Похоже, что срок действия ссылки для подтверждения истек. Не волнуйтесь, мы можем отправить ссылку повторно',
        resendLink: 'Отправить ссылку повторно',
      },
    },
    recovery: {
      resendForm: {
        headTitle: 'Отправка повторного подтверждения восстановления пароля',
      },
      headTitle: 'Восстановление пароля',
      createNewPasswordPage: {
        title: 'Создание нового пароля',
        password: 'Новый пароль',
        passwordConfirmation: 'Подтверждение пароля',
        descriptionPassword: 'Ваш пароль должен содержать от 6 до 20 символов',
        button: 'Создать новый пароль',
        error: {
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
  },
  messenger: {
    headTitle: 'Мессенджер',
  },
  statistics: {
    headTitle: 'Статистика',
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
  favorites: {
    headTitle: 'Избранное',
  },
}
