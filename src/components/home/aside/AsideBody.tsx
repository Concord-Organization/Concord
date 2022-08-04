import { Box } from '@chakra-ui/react'
import Card from '@src/components/Molecule/Card'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'
import MessageList from '../main/MessageList'
import AsideBodyContainer from './AsideBodyContainer'

export default function AsideBody() {
  return (
    <AsideBodyContainer>
      {/* 친구 목록 버튼 */}
      <Box h="42px">
        <Card icon={<FaUserAlt size="24px" />} text="친구" />
      </Box>

      <Box h="100%" mt="10px" display="flex" flexDirection="column">
        <Box as="span" fontSize="12px" pl="8px">
          다이렉트 메시지
        </Box>
        {/* 채팅방 목록 */}
        <MessageList />
      </Box>
    </AsideBodyContainer>
  )
}
