import { ISigninInput } from '@src/interfaces/formInput/formInputInterface'
import SigninView from '@src/view/signin/SigninView'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function SigninViewModel() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ISigninInput>()

  // validation 통과 시 실행 될 함수 formDate에 input 값들 담김
  const onValid: SubmitHandler<ISigninInput> = (formData) => {
    console.log(formData)
    setError('password', { message: '비밀번호가 틀립니다.' })
    setError('email', { message: '이메일이 틀립니다.' })
  }
  return (
    <SigninView
      errors={errors}
      register={register}
      onSubmit={handleSubmit(onValid)}
    />
  )
}
