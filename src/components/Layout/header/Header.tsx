import { Box } from '@chakra-ui/react'
import ChanelList from '@src/components/nav/ChanelList'
import ChanelOptionList from '@src/components/nav/ChanelOptionList'
import React from 'react'

export default function Header() {
  return (
    <Box as="header" w="72px" h="100%" py="12px" bg="blackAlpha.900" px="12px">
      <Box as="nav" h="100%" w="full">
        <Box
          as="ul"
          h="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          gap="4px"
        >
          <Box
            as="li"
            h="100%"
            overflowY="scroll"
            css={{
              '&::-webkit-scrollbar': {
                width: '0px',
              },
              '&::-webkit-scrollbar-track': {
                width: '0px',
              },
            }}
          >
            <ChanelList />
          </Box>
          <li>
            <ChanelOptionList />
          </li>
        </Box>
      </Box>
    </Box>
  )
}
