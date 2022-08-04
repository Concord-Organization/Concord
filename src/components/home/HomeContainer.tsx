import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function HomeContainer({ children }: IChildrenProps) {
  return (
    <Box minH="100%" h="100%" w="100%" display="inline-flex">
      {children}
    </Box>
  )
}
