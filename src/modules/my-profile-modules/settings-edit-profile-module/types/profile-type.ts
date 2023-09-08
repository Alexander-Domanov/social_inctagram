export type RootProfile = {
  id: number
  userName: string | null
  firstName: string | null
  lastName: string | null
  city: string | null
  dateOfBirth: string | null | Date
  aboutMe: string | null
  avatars: RootAvatars[] | []
  hasBusinessAccount: boolean
}
type RootAvatars = {
  uploadId: number
  url: string
  width: number
  height: number
  fileSize: number
}

export type ResponseError = {
  response: {
    data: {
      messages: {
        message: string
      }[]
    }
  }
}
