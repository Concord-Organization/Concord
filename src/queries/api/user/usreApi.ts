import {
  IEmailRequest,
  ISignupRequest,
} from '@src/interfaces/api/request/userRequestInterface'
import { IDefaultResponse } from '@src/interfaces/api/response/userResponseInterface'
import { defaultClient } from '../AxiosConfig'

export function signupApi(data: ISignupRequest): Promise<IDefaultResponse> {
  return defaultClient.post('/user/signup', data)
}

export function checkEmailApi(data: IEmailRequest): Promise<IDefaultResponse> {
  return defaultClient.post('/user/checkEmail', data)
}
