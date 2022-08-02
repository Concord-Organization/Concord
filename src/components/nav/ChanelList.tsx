import { Box } from '@chakra-ui/react'
import React from 'react'
import ChanelBadge from './ChanelBadge'
import ChanelListContainer from './ChanelListContainer'

export default function ChanelList() {
  return (
    <ChanelListContainer>
      <li>
        <ChanelBadge>Home</ChanelBadge>
        <Box mt="8px" w="30px" h="2px" bg="grey" mx="auto" />
      </li>
      <li>
        <ChanelBadge>Home</ChanelBadge>
      </li>
      <li>
        <ChanelBadge>Home</ChanelBadge>
      </li>
      <li>
        <ChanelBadge>Home</ChanelBadge>
      </li>
      <li>
        <ChanelBadge>Home</ChanelBadge>
      </li>
    </ChanelListContainer>
  )
}
