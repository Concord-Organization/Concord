import { Box } from '@chakra-ui/react'
import AsideHeader from '@src/components/home/aside/AsideHeader'
import Card from '@src/components/parts/Card'
import { FaUserAlt } from 'react-icons/fa'

import React from 'react'

export default function HomeView() {
  return (
    <Box w="100vw" h="100vh" pl="72px">
      <Box h="100%" w="240px">
        <AsideHeader />
        <Box h="100%" bg="gray" py="8px" px="8px">
          <Card icon={<FaUserAlt size="full" />} />
        </Box>
      </Box>
    </Box>
  )
}
