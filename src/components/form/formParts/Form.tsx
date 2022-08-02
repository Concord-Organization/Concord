import { Box } from '@chakra-ui/react'
import React from 'react'

interface IFormProps {
  children: React.ReactNode
  title: string
  onSubmit: any
}

export default function Form({ children, title, onSubmit }: IFormProps) {
  return (
    <Box
      as="form"
      p="32px"
      borderRadius={5}
      w={480}
      shadow="base"
      bg="white"
      onSubmit={onSubmit}
    >
      <Box display="flex" flexDirection="column" gap="20px">
        <Box
          as="h3"
          h="30px"
          display="block"
          textAlign="center"
          lineHeight="30px"
          fontSize="25px"
          fontWeight={600}
        >
          {title}
        </Box>
        {children}
      </Box>
    </Box>
  )
}
