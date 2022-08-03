import { Box } from '@chakra-ui/react'
import React from 'react'

export default function CardRight({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
    >
      {children}
    </Box>
  )
}
