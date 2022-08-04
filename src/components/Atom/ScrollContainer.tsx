import { Box } from '@chakra-ui/react'
import { IChildrenProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function ScrollContainer({ children }: IChildrenProps) {
  return (
    <Box
      h="100%"
      overflowY="scroll"
      css={{
        '&::-webkit-scrollbar': {
          width: '0px',
        },
        '&::-webkit-scrollbar-track': {
          width: '0px',
        },
      }}
    >
      {children}
    </Box>
  )
}
