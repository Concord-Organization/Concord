import { useMutation, useQuery } from '@tanstack/react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  checkEmailApi,
  signinApi,
  signupApi,
  userApi,
} from '../api/user/usreApi'

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

export const tokenQuery = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const query = useQuery(['home'], userApi, {
    retry: false,
    onSuccess() {
      if (pathname === '/signin' || pathname === '/signup') {
        navigate('/')
      }
    },
    onError() {
      if (pathname === '/' || pathname.includes('friend')) navigate('/signin')
    },
  })

  return query
}
