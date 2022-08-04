import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function AsideContainer({ children }: IChildrenProps) {
  return (
    <Box minW="240px" w="240px" h="100%" display="flex" flexDirection="column">
      {children}
    </Box>
  )
}
