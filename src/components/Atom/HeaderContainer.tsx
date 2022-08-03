import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function HeaderContainer({ children }: IChildrenProps) {
  return (
    <Box minH="48px" px="10px" display="flex" alignItems="center">
      {children}
    </Box>
  )
}
