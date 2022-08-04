export interface ISignupRequest {
  name: string
  email: string
  password: string
}

export interface IEmailRequest {
  email: string
}

export interface ISigninRequest {
  email: string
  password: string
}
