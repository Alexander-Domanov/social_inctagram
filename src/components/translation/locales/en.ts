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
      settingsProfileTabs: {
        generalInformation: 'General information',
        devices: 'Devices',
        accountManagement: 'Account management',
        myPayments: 'My payments',
      },
      generalInformation: {
        errors: {
          userName: 'Username is required',
          dateOfBirthMax: 'Date of birth cannot be in the future',
          dateOfBirthTypeError: 'Date of birth has to be a valid date',
          aboutMe: 'Сan not be more than 200',
        },
        userName: 'Username',
        firstName: 'First Name',
        lastName: 'Last Name',
        dateOfBirthday: 'Date of birthday',
        city: 'City',
        aboutMe: 'About me',
        buttonSaveChanges: 'Save Changes',
      },
      devices: {},
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
      errors: 'The password or the email or Username are incorrect. Try again, please',
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
    },
  },
  statistics: {
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
}

export type LocaleType = typeof en
