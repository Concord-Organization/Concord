import { Box } from '@chakra-ui/react'
import React from 'react'

export default function AsideHeader() {
  return (
    <Box
      h="48px"
      shadow="md"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        as="button"
        w="220px"
        h="28px"
        bg="primary"
        borderRadius="3px"
        textAlign="start"
        px="6px"
        fontSize="14px"
        color="white"
      >
        대화 찾기 또는 시작하기
      </Box>
    </Box>
  )
}
