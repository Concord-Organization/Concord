import { Box } from '@chakra-ui/react'
import React from 'react'
import AsideBody from './AsideBody'
import AsideFooter from './AsideFooter'
import AsideHeader from './AsideHeader'

export default function Aside() {
  return (
    <Box minW="240px" h="100%" display="flex" flexDirection="column">
      <AsideHeader />
      <AsideBody />
      <AsideFooter />
    </Box>
  )
}
