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
}

export type LocaleType = typeof en
