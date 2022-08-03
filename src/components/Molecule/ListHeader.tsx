import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

export default function ListHeader() {
  return (
    <Box
      display="flex"
      alignItems="center"
      pl="8px"
      pr="16px"
      borderRight="1px solid gray"
    >
      <Box mr="8px">
        <FaUserAlt size="24px" />
      </Box>
      <Box as="h3" whiteSpace="nowrap">
        친구
      </Box>
    </Box>
  )
}
