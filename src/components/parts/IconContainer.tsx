import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function IconContainer({ children }: IChildrenProps) {
  return (
    <Box w="24px" h="24px">
      {children}
    </Box>
  )
}
