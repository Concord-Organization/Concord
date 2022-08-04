import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function MainContainer({ children }: IChildrenProps) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      h="100%"
      w="100%"
      bg="white"
      flex={1}
    >
      {children}
    </Box>
  )
}
