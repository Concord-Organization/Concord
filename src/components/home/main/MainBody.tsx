import { Box } from '@chakra-ui/react'
import SubTitle from '@src/components/Atom/SubTitle'
import Search from '@src/components/Molecule/Search'
import React from 'react'
import FriendList from './FriendList'

export default function MainBody() {
  return (
    <Box py="15px" px="20px" h="100%">
      <Box marginBottom="8px">
        <Search />
      </Box>
      <Box pt="8px" pb="16px" borderBottom="1px solid gray" fontWeight="500">
        <SubTitle>온라인 - 1명</SubTitle>
      </Box>
      {/* 친구들 목록 */}
      <FriendList />
    </Box>
  )
}
