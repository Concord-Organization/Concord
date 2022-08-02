import { Box } from '@chakra-ui/react'
import SignupForm from '@src/components/form/SignupForm'
import { ISignupInput } from '@src/interfaces/formInput/formInputInterface'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ISignupViewProps {
  register: UseFormRegister<ISignupInput>
  onSubmit: any
  errors: FieldErrors<ISignupInput>
  onButtonsClicks: any
}

export default function SignupView({
  register,
  onSubmit,
  errors,
  onButtonsClicks,
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
      <SignupForm
        errors={errors}
        title="회원가입"
        register={register}
        onSubmit={onSubmit}
        onButtonsClicks={onButtonsClicks}
      />
    </Box>
  )
}
