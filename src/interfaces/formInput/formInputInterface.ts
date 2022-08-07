export interface ISignupInput {
  name: string
  email: string
  username: string
  password: string
  confirmPassword: string
}

export interface ISigninInput {
  email: string
  password: string
}

export interface IChatInput {
  chat: string
}
