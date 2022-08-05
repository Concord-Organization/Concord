import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
// / Interfaces
import { ISigninInput } from '@src/interfaces/formInput/formInputInterface'
// View
import SigninView from '@src/view/signin/SigninView'
import { signinMutation } from '@src/queries/queryHooks/user'
import { useNavigate } from 'react-router-dom'
import { validateEmail } from '@src/utils/validation/validate'
import { defaultClient } from '@src/queries/api/AxiosConfig'

export default function SigninViewModel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISigninInput>()

  const { mutate, isLoading } = signinMutation()

  const navigate = useNavigate()

  // validation 통과 시 실행 될 함수 formDate에 input 값들 담김
  const onValid: SubmitHandler<ISigninInput> = (formData) => {
    if (!validateEmail(formData.email)) {
      setError('email', { message: '이메일 형식에 맞춰주세요.' })
      return
    }
    if (isLoading) return
    mutate(formData, {
      onSuccess: ({ data }) => {
        localStorage.setItem('token', `Bearer ${data.accessToken}`)
        defaultClient.defaults.headers.common.Authorization = `Bearer ${data.accessToken}`
        navigate('/')
      },
      onError: (error: any) => {
        setError('email', { message: error.response.data.message })
        setError('password', { message: error.response.data.message })
      },
    })
  }
  return (
    <SigninView
      errors={errors}
      register={register}
      onSubmit={handleSubmit(onValid)}
    />
  )
}
