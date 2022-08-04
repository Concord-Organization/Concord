import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function BigIcon({ children }: IChildrenProps) {
  return (
    <Box
      boxSize="36px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="full"
      bg="gray"
    >
      {children}
    </Box>
  )
}
