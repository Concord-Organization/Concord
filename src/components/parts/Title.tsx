import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Title({ title }: { title: string }) {
  return <Box as="h1">{title}</Box>
}
