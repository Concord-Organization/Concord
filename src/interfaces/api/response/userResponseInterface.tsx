export interface IDefaultResponse {
  data: {
    message: string
    isOk: boolean
  }
}

export interface ISigninResponse {
  data: {
    accessToken: string
  }
}
