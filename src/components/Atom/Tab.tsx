import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Tab({ text }: { text: string }) {
  return (
    <Box
      py="2px"
      px="8px"
      borderRadius="3px"
      _hover={{ bg: 'primary' }}
      display="flex"
      alignItems="center"
      cursor="pointer"
      minW="40px"
      whiteSpace="nowrap"
    >
      {text}
    </Box>
  )
}
