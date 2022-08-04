import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function SubTitle({ children }: IChildrenProps) {
  return (
    <Box as="h2" fontSize="12px">
      {children}
    </Box>
  )
}
