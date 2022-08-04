import { useMutation } from '@tanstack/react-query'
import { checkEmailApi, signupApi } from '../api/user/usreApi'

export const signupMutation = () => {
  const signupQuery = useMutation(signupApi)
  return signupQuery
}

export const checkEmailMutation = () => {
  const signupQuery = useMutation(checkEmailApi)
  return signupQuery
}
