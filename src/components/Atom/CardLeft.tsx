import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function CardLeft({ children }: IChildrenProps) {
  return (
    <Box width="42px" h="42px" pr="10px">
      {children}
    </Box>
  )
}
