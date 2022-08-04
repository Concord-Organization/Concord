import { Box } from '@chakra-ui/react'
import React from 'react'
import HeaderContainer from '@src/components/Atom/HeaderContainer'
import TextButton from '@src/components/Atom/TextButton'

// Home 화면의 header
export default function AsideHeader() {
  return (
    <HeaderContainer>
      <Box w="full" h="28px">
        {/* 대화 찾거나 시작하는 버튼 */}
        <TextButton text="대화 찾기 또는 시작하기" bgColor="primary" />
      </Box>
    </HeaderContainer>
  )
}
