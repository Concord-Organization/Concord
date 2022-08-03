import { Box } from '@chakra-ui/react'
import React from 'react'

export default function TextButton({
  text,
  bgColor,
}: {
  text: string
  bgColor: string
}) {
  return (
    <Box
      as="button"
      w="full"
      h="full"
      bg={bgColor}
      borderRadius="3px"
      textAlign="start"
      py="2px"
      px="8px"
      fontSize="14px"
      color="white"
    >
      {text}
    </Box>
  )
}
