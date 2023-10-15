import { pluralizeEn } from '@/common'

export const en = {
  navBar: {
    home: 'Home',
    create: 'Create',
    myProfile: 'My Profile',
    messenger: 'Messenger',
    search: 'Search',
    statistics: 'Statistics',
    favorites: 'Favorites',
    logout: 'Logout',
  },
  confirm: {
    buttonYes: 'Yes',
    buttonNo: 'No',
  },
  profile: {
    headTitle: 'Profile',
    profilePage: {
      buttonProfileSettings: 'Profile Settings',
      following: 'Following',
      followers: 'Followers',
      getCountFollower(count: number) {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return `${count} Followers`
          case 'one':
            return `${count} follower`
          case 'few':
            return `${count} followers`
          case 'many':
            return `${count} followers`
        }
      },
      getCountFollowing(count: number) {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return `${count} Following`
          case 'one':
            return `${count} Following`
          case 'few':
            return `${count} Followings`
          case 'many':
            return `${count} Followings`
        }
      },
      getCountFollowerPage(count: number): string | undefined {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return 'Followers'
          case 'one':
            return `Follower`
          case 'few':
            return `Followers`
          case 'many':
            return `Followers`
        }
      },
      getCountFollowingPage(count: number): string | undefined {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return 'Following'
          case 'one':
            return `Following`
          case 'few':
            return `Followings`
          case 'many':
            return `Followings`
        }
      },
      getCountPublicationPage(count: number): string | undefined {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return 'Publication'
          case 'one':
            return `Publication`
          case 'few':
            return `Publications`
          case 'many':
            return `Publications`
        }
      },
      delete: 'Delete',
      Publications: 'Publications',
      confirmTitleDeleteFollowing: 'Delete FollowingPage"',
      confirmDescriptionDeleteFollowing: 'Do you really want to delete a FollowingPage ',
    },
    settingsProfile: {
      headTitle: 'Profile Settings',
      settingsProfileTabs: {
        generalInformation: {
          titleTab: 'General information',
          userName: {
            label: 'Username',
            min: 'Minimum number of characters 6',
            max: 'Maximum number of characters 30',
            matches: 'Only allowed characters are 0-9, A-Z, a-z, _, -',
            required: 'Username is required',
          },
          firstName: {
            label: 'First Name',
            min: 'Minimum number of characters 1',
            max: 'Maximum number of characters 50',
            matches: 'Only letters are allowed',
          },
          lastName: {
            label: 'Last Name',
            min: 'Minimum number of characters 1',
            max: 'Maximum number of characters 50',
            matches: 'Only letters are allowed',
          },
          dateOfBirthday: {
            label: 'Date of birthday',
            max: 'Date of birth cannot be in the future',
            typeError: 'Date of birth has to be a valid date',
          },
          city: 'City',
          aboutMe: {
            label: 'About me',
            max: 'Сan not be more than 200',
          },
          buttonSaveChanges: 'Save Changes',
        },
        devices: 'Devices',
        accountManagement: 'Account management',
        myPayments: 'My payments',
      },
      devices: {
        titleDevices: 'This devices',
        online: 'Online',
        buttonDevices: 'Terminate all other session',
        activeSession: 'Active sessions',
        confirm: {
          title: 'Terminate all other session?',
          text: 'Are you sure you want to terminate all other session?',
          buttonDecline: 'No',
        },
        otherDevice: {
          lastVisit: {
            title: 'Last visit',
          },
          buttonLogout: 'Logout',
          confirm: {
            title: 'Terminate Session?',
            text: 'Are you sure you want to terminate session?',
            buttonDecline: 'No',
          },
        },
      },
      accountManagement: {
        currentSubscription: {
          currentSubscription: 'Current Subscriptions:',
          datePayment: 'Date of payment',
          endDateSub: 'End date of subscription',
          autoRenewal: 'Auto-Renewal',
        },
        accountType: {
          titleAccountType: 'Account type:',
          personal: 'Personal',
          business: 'Business',
        },
        subscriptionType: {
          titleSub: 'Choose subscription:',
        },
        paymentMethods: {
          confirm: {
            buttonOk: 'Ok',
            text: 'Oops sanctions! 🙈',
          },
        },
        paymentsConfirmationModals: {
          confirm: {
            titleSuccess: 'Success',
            buttonTextSuccess: 'Ok',
            textSuccess: 'Payment was successful!',
            titleError: 'Error',
            buttonTextError: 'Back to payment',
            textError: 'Transaction failed, please try again',
          },
        },
      },
    },
  },
  uploadPhoto: {
    buttonAddPhoto: 'Add a Profile Photo',
    uploadAvatarBlock: {
      title: 'Add a Profile Photo',
    },
    profileAvatarEditor: {
      buttonSave: 'Save',
    },
    photoSelector: {
      buttonSelectComputer: 'Select from computer',
    },
  },
  userProfile: {
    buttonMessage: 'Send Message',
    buttonFollow: 'Follow',
    buttonUnfollow: 'Unfollow',
  },
  likes: {
    getCountTitleLikes(count: number) {
      const str = pluralizeEn(count)

      switch (str) {
        case 'other':
          return `${count} Likes`
        case 'one':
          return `${count} Like`
        case 'few':
          return `${count} Likes`
        case 'many':
          return `${count} Likes`
      }
    },
    getCountLikes(count: number): string | undefined {
      const str = pluralizeEn(count)

      switch (str) {
        case 'other':
          return 'Likes'
        case 'one':
          return `Like`
        case 'few':
          return `Likes`
        case 'many':
          return `Likes`
      }
    },
  },
  addCommentForm: {
    addComment: 'Add a comment...',
    addAnswer: 'Add a answer...',
    publish: 'Publish',
  },
  postActions: {
    follow: 'Follow',
    unFollow: 'Unfollow',
    deletePost: 'Delete Post',
    editPost: 'Edit Post',
    report: 'Report',
  },
  search: {
    headTitle: 'Search',
    searchTitle: 'Search',
    searchInput: 'Search',
    recentRequests: 'Recent requests',
    noRequests: 'No recent requests',
    placeEmpty: 'Oops! This place looks empty!',
  },
  homepage: {
    viewComments: 'View All Comments',
  },
  PostCommentAnswers: {
    answer: 'Answer',
    getCountShowAnswers(count: number) {
      const str = pluralizeEn(count)

      switch (str) {
        case 'other':
          return `Show answers (${count})`
        case 'one':
          return `Show answer (${count})`
        case 'few':
          return `Show answers (${count})`
        case 'many':
          return `Show answers (${count})`
      }
    },
    getCountHideAnswers(count: number): string | undefined {
      const str = pluralizeEn(count)

      switch (str) {
        case 'other':
          return `Hide answers (${count})`
        case 'one':
          return `Hide answer (${count})`
        case 'few':
          return `Hide answers (${count})`
        case 'many':
          return `Hide answers (${count})`
      }
    },
  },
  auth: {
    signUp: 'Sign Up',
    singIn: 'Sing In',
    email: 'Email',
    password: 'Password',
    confirm: {
      ok: 'OK',
      titleEmail: 'Email Sent',
      text: 'We have sent a link to confirm your email to',
    },
    login: {
      title: 'Login',
      forgotPassword: 'Forgot password?',
      haveAccount: `Don't have account?`,
      errorsSchema: {
        email: 'Email is required filed',
        password: 'Password is required filed',
      },
      customErrors: 'The password or the email or Username are incorrect. Try again, please',
    },
    registration: {
      title: 'Sign Up',
      userName: 'UserName',
      email: 'Email',
      password: 'Password',
      passwordConfirmation: 'Password Confirmation',
      confirmationMessage: `
          'Didn't receive a confirmation message?`,
      haveAccount: 'Do you have an account',
      errors: {
        userName: {
          required: 'User name is required filed',
          min: 'Minimum number of characters 6',
          max: 'Maximum number of characters 30',
        },
        email: {
          required: 'Email is required filed',
          email: 'Email must be a valid email',
        },
        password: {
          min: 'Minimum number of characters 6',
          max: 'Password must be at most 20 characters',
        },
        confirmPassword: {
          min: 'Minimum number of characters 6',
          max: 'Password must be at most 20 characters',
          password: 'Passwords do not match',
        },
      },
      resendForm: {
        title: 'Resend-Form',
        resendLink: 'Resend verification link',
        email: 'Email',
        send: 'Send',
        error: {
          email: 'Email is required filed',
        },
      },
      externalAccount: {
        titlePage: 'External-Account',
        title: 'Merger of Accounts',
        description: (email: string): string =>
          `The user with email:${email} is already in the system. Could we merge this accounts?`,
        buttonYes: 'Yes, merge',
        buttonNo: 'no',
        modalConfirm: {
          title: 'Merger of Accounts',
          buttonOk: 'Ok',
        },
      },
    },
    forgotPassword: {
      title: 'Forgot Password',
      backToSignIn: 'Back to Sign In',
      description: ' Enter your email address and we will send you further instructions',
      buttonSend: 'Send instructions',
      modal: {
        title: 'Email sent',
        text: {
          getDescription(email: string | undefined) {
            return `The link has been sent to your email ${email}. If you don’t receive an email send link again.`
          },
        },
      },
      error: {
        required: 'Email is required field',
        email: 'Email is invalid',
      },
    },
    registrationConfirmation: {
      emailSuccessMessage: {
        headTitle: 'Email Confirmation',
        title: 'Congratulations!',
        description: 'Your email has been confirmed',
        signIn: 'Sign in',
      },
      ResendingVerificationLink: {
        headTitle: 'Email Verification Link Expired',
        title: 'Email verification link expired',
        description:
          ' Looks like the verification link has expired. Not to worry, we can send the link again',
        resendLink: ' Resend verification link',
      },
    },
    recovery: {
      resendForm: {
        headTitle: 'Resending Password Recovery Confirmation',
      },
      headTitle: 'Password recovery',
      createNewPasswordPage: {
        title: 'Create New Password',
        password: '"New password"',
        passwordConfirmation: 'Password confirmation',
        descriptionPassword: 'Your password must be between 6 and 20 characters',
        button: 'Create new password',
        error: {
          password: {
            min: 'Minimum number of characters 6',
            max: 'Password must be at most 20 characters',
          },
          confirmPassword: {
            min: 'Minimum number of characters 6',
            max: 'Password must be at most 20 characters',
            password: 'Passwords do not match',
          },
        },
      },
    },
  },
  messenger: {
    headTitle: 'Messenger',
  },
  statistics: {
    headTitle: 'Statistics',
    pagesTitle: {
      title: 'Statistics',
      likes: 'Likes',
      comments: 'Comments',
      publication: 'Publication views',
    },
    tabsTitle: {
      week: 'Week',
      month: 'Month',
    },
    popUp: {
      getCountTitleLikes(count: number) {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return `${count} Likes`
          case 'one':
            return `${count} Like`
          case 'few':
            return `${count} Likes`
          case 'many':
            return `${count} Likes`
        }
      },
      getCountTitleComments(count: number) {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return `${count} Comments`
          case 'one':
            return `${count} Comment`
          case 'few':
            return `${count} Comments`
          case 'many':
            return `${count} Comments`
        }
      },
      getCountTitlePublication(count: number) {
        const str = pluralizeEn(count)

        switch (str) {
          case 'other':
            return `${count} Publication views`
          case 'one':
            return `${count} Publication view`
          case 'few':
            return `${count} Publication views`
          case 'many':
            return `${count} Publication views`
        }
      },
    },
  },
  favorites: {
    headTitle: 'Favorites',
  },
}

export type LocaleType = typeof en
