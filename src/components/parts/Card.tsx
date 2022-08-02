import { Box } from '@chakra-ui/react'
import React from 'react'
import IconContainer from './IconContainer'

export default function Card({ icon }: { icon: React.ReactNode }) {
  return (
    <Box display="flex" h="42px" alignItems="center" px="8px">
      <Box
        width="42px"
        h="42px"
        display="flex"
        alignItems="center"
        justifyContent="center"
        pr="12px"
      >
        <IconContainer>{icon}</IconContainer>
      </Box>
      <Box>친구</Box>
    </Box>
  )
}
