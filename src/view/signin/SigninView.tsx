import { Box } from '@chakra-ui/react'
import SigninForm from '@src/components/form/SigninForm'
import { ISigninInput } from '@src/interfaces/formInput/formInputInterface'
import React from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ISignupViewProps {
  register: UseFormRegister<ISigninInput>
  onSubmit: any
  errors: FieldErrors<ISigninInput>
}

export default function SigninView({
  register,
  onSubmit,
  errors,
}: ISignupViewProps) {
  return (
    <Box
      p={4}
      bg="white"
      minW="100vw"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <SigninForm
        errors={errors}
        title="로그인"
        register={register}
        onSubmit={onSubmit}
      />
    </Box>
  )
}
