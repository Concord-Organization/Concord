import { Button, Link } from '@chakra-ui/react'
import { ISignupInput } from '@src/interfaces/formInput/formInputInterface'
import { UseFormRegister } from 'react-hook-form'
import { Link as ReachLink } from 'react-router-dom'
import Form from './Form'
import InputSet from './InputSet'

interface ISignupFormProps {
  title: string
  register: UseFormRegister<ISignupInput>
  onSubmit: any
  errors: any
  onButtonsClicks: any
}

export default function SignupForm({
  title,
  register,
  onSubmit,
  errors,
  onButtonsClicks,
}: ISignupFormProps) {
  return (
    <Form title={title} onSubmit={onSubmit}>
      <InputSet
        register={register('name', { required: '이름을 입력해주세요.' })}
        type="text"
        text="이름"
        errorMessage={errors?.name}
      />
      <InputSet
        register={register('email', { required: '이메일을 입력해주세요.' })}
        type="email"
        text="이메일"
        buttonText="확인"
        errorMessage={errors?.email}
        onClick={onButtonsClicks?.email}
      />
      <InputSet
        register={register('password', {
          required: '비밀번호를 입력해주세요.',
        })}
        type="password"
        text="비밀번호"
        errorMessage={errors?.password}
      />
      <InputSet
        register={register('confirmPassword', {
          required: '비밀번호 확인을 입력해주세요.',
        })}
        type="password"
        text="비밀번호 확인"
        errorMessage={errors?.confirmPassword}
      />
      <Button
        type="submit"
        bg="primary"
        h="44px"
        color="white"
        borderRadius={3}
      >
        회원가입
      </Button>
      <Link as={ReachLink} to="/signin" fontSize="14px" mt="-10px">
        이미 계정이 있으신가요?
      </Link>
    </Form>
  )
}
