import { Box } from '@chakra-ui/react'
import HeaderContainer from '@src/components/Atom/HeaderContainer'
import TextButton from '@src/components/Atom/TextButton'
import Tab from '@src/components/Atom/Tab'
import ListHeader from '@src/components/Molecule/ListHeader'
import React from 'react'

export default function MainHeader() {
  return (
    <HeaderContainer>
      <Box h="24px" display="flex" alignItems="center">
        {/* 헤더의 간략 타이틀 */}
        <ListHeader />
        {/*  홈 메인 헤더 카테고리 텝 */}
        <Box display="flex" gap="10px" pl="8px">
          <Tab text="온라인" />
          <Tab text="모두" />
          <Tab text="대기중" />
          <Tab text="차단 목록" />
          <Box w="104px">
            <TextButton bgColor="green" text="친구 추가하기" />
          </Box>
        </Box>
      </Box>
    </HeaderContainer>
  )
}
