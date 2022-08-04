import { Box } from '@chakra-ui/react'
import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Icon from '../Atom/Icon'

export default function Search() {
  return (
    <Box w="full" position="relative">
      <Box
        as="input"
        type="text"
        w="full"
        bg="black"
        borderRadius="3px"
        h="30px"
        px="8px"
        placeholder="검색하기"
        color="white"
        _placeholder={{ color: 'white' }}
      />
      <Box position="absolute" right={0} top={0} color="white">
        <Icon>
          <BiSearchAlt2 />
        </Icon>
      </Box>
    </Box>
  )
}
