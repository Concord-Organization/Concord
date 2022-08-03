import { Box } from '@chakra-ui/react'
import React from 'react'
import Search from '@src/components/Atom/Search'
import HeaderContainer from '@src/components/Atom/HeaderContainer'

export default function AsideHeader() {
  return (
    <HeaderContainer>
      <Box w="full" h="28px">
        <Search text="대화 찾기 또는 시작하기" bgColor="primary" />
      </Box>
    </HeaderContainer>
  )
}
