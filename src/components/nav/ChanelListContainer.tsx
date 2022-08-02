import { Box } from '@chakra-ui/react'
import React from 'react'

export default function ChanelListContainer({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Box
      as="ul"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap="8px"
    >
      {children}
    </Box>
  )
}
