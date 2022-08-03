import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Icon({ children }: { children: React.ReactNode }) {
  return (
    <Box
      boxSize="32px"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  )
}
