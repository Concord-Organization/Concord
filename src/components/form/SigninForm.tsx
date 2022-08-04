import { ISigninInput } from '@src/interfaces/formInput/formInputInterface'
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { Link as ReachLink } from 'react-router-dom'
import { Link } from '@chakra-ui/react'
import Form from './formParts/Form'
import InputSet from './formParts/InputSet'
import Submit from './formParts/Submit'

interface ISigninFormProps {
  title: string
  register: UseFormRegister<ISigninInput>
  onSubmit: any
  errors: any
}

export default function SigninForm({
  title,
  register,
  onSubmit,
  errors,
}: ISigninFormProps) {
  return (
    <Form onSubmit={onSubmit} title={title}>
      <InputSet
        errorMessage={errors?.email}
        register={register('email', { required: '이메일을 입력해주세요.' })}
        text="이메일"
        type="email"
      />
      <InputSet
        errorMessage={errors?.password}
        register={register('password', {
          required: '비밈번호를 입력해주세요.',
        })}
        text="비밀번호"
        type="password"
      />
      <Submit text="로그인" />
      <Link as={ReachLink} to="/signup" fontSize="14px" mt="-10px">
        계정이 없으신가요?
      </Link>
    </Form>
  )
}
