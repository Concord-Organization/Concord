import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

// 메인 부분 Header의 정보를 알려주는 간략 타이틀
export default function ListHeader({ title }: { title: string }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      pl="16px"
      pr="16px"
      borderRight="1px solid gray"
    >
      <Box mr="8px">
        <FaUserAlt size="24px" />
      </Box>
      <Box as="h3" whiteSpace="nowrap">
        {title}
      </Box>
    </Box>
  )
}
