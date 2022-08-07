import { Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import ChanelBadge from './ChanelBadge'
import ChanelListContainer from './ChanelListContainer'

export default function ChanelList() {
  return (
    <ChanelListContainer>
      <li>
        <Link to="/">
          <ChanelBadge>Home</ChanelBadge>
        </Link>
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
