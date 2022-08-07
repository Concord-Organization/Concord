import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function MainBodyContainer({ children }: IChildrenProps) {
  return (
    <Box py="15px" px="20px" h="100%" w="100%" position="relative" flex={1}>
      {children}
    </Box>
  )
}
