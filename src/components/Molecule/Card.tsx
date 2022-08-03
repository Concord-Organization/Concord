import { Box } from '@chakra-ui/react'
import React from 'react'
import CardContainer from '../Atom/CardContainer'
import CardRight from '../Atom/CardRight'
import Icon from '../Atom/Icon'

export default function Card({
  icon,
  text,
}: {
  text: string
  icon: React.ReactNode
}) {
  return (
    <CardContainer>
      <Box mr="10px">
        <Icon>{icon}</Icon>
      </Box>
      <CardRight>{text}</CardRight>
    </CardContainer>
  )
}
