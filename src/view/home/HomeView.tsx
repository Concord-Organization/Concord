import { Box } from '@chakra-ui/react'
import HeaderContainer from '@src/components/Atom/HeaderContainer'
import TextButton from '@src/components/Atom/Search'
import Tab from '@src/components/Atom/Tab'
import Aside from '@src/components/home/aside/Aside'
import ListHeader from '@src/components/Molecule/ListHeader'
import React from 'react'

export default function HomeView() {
  return (
    <Box w="100%" minH="100%" h="100%" display="flex">
      <Aside />
      <Box display="flex" flexDirection="column" w="100%" h="100%">
        <HeaderContainer>
          <Box h="24px" display="flex" alignItems="center">
            <ListHeader />
            <Box display="flex" gap="10px" pl="16px">
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
      </Box>
    </Box>
  )
}
