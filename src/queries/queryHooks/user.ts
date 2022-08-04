import { useMutation } from '@tanstack/react-query'
import { checkEmailApi, signinApi, signupApi } from '../api/user/usreApi'

export const signupMutation = () => {
  const query = useMutation(signupApi)
  return query
}

export const checkEmailMutation = () => {
  const query = useMutation(checkEmailApi)
  return query
}

export const signinMutation = () => {
  const query = useMutation(signinApi)
  return query
}
