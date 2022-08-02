import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from '@chakra-ui/react'
import React from 'react'

interface IInputSet {
  text: string
  errorMessage: any
  type: string
  buttonText?: string
  register: any
  onClick?: () => void
}

export default function InputSet({
  text,
  errorMessage,
  type,
  buttonText,
  register,
  onClick,
}: IInputSet) {
  return (
    <FormControl isInvalid={errorMessage && errorMessage?.type !== 'confirm'}>
      <FormLabel fontSize={12}>{text}</FormLabel>
      <InputGroup display="flex" gap={2}>
        <Input
          {...register}
          borderRadius={3}
          p="10px"
          type={type}
          borderColor="blackAlpha.400"
        />
        {buttonText && (
          <Button bg="primary" color="white" borderRadius={3} onClick={onClick}>
            {buttonText}
          </Button>
        )}
      </InputGroup>
      {errorMessage?.type === 'confirm' ? (
        <FormHelperText>{errorMessage?.message}</FormHelperText>
      ) : (
        <FormErrorMessage>{errorMessage?.message}</FormErrorMessage>
      )}
    </FormControl>
  )
}

InputSet.defaultProps = {
  buttonText: '',
  onClick: null,
}
