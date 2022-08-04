import { Box } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'
import BigIcon from '../Atom/BigIcon'
import DetailCard from './DetailCard'

// 아바타 텍스트 버튼이 있는 카드
export default function OptionDetailCard() {
  return (
    <Box
      h="61px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <DetailCard
        mainText="김찬우"
        subText="온라인"
        src="https://avatars.githubusercontent.com/u/93105924?s=400&v=4"
      />
      <Box display="flex" gap="15px" position="absolute" right="8px">
        <button type="button">
          <BigIcon>
            <FiMessageSquare size="20px" />
          </BigIcon>
        </button>
        <button type="button">
          <BigIcon>
            <AiOutlineMore size="20px" />
          </BigIcon>
        </button>
      </Box>
    </Box>
  )
}
