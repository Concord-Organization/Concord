import { Box } from '@chakra-ui/react'
import React from 'react'

export default function CardListContainer({
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
      listStyleType="none"
    >
      {children}
    </Box>
  )
}
