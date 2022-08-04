import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

// Aside Body Container
export default function AsideBodyContainer({ children }: IChildrenProps) {
  return (
    <Box
      bg="gray"
      py="8px"
      px="8px"
      flex={1}
      display="flex"
      flexDirection="column"
      overflow="hidden"
    >
      {children}
    </Box>
  )
}
