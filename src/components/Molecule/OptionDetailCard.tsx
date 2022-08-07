import { Box } from '@chakra-ui/react'
import { ICardProps } from '@src/interfaces/component/componentInterface'
import React from 'react'
import { AiOutlineMore } from 'react-icons/ai'
// import { FiMessageSquare } from 'react-icons/fi'
import BigIcon from '../Atom/BigIcon'
import DetailCard from './DetailCard'

// 아바타 텍스트 버튼이 있는 카드
export default function OptionDetailCard({
  mainText,
  subText,
  src,
}: ICardProps) {
  return (
    <Box
      h="61px"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
    >
      <DetailCard mainText={mainText} subText={subText} src={src} />
      <Box display="flex" gap="15px" position="absolute" right="8px">
        {/* <button type="button">
          <BigIcon>
            <FiMessageSquare size="20px" />
          </BigIcon>
        </button> */}
        <button type="button">
          <BigIcon>
            <AiOutlineMore size="20px" />
          </BigIcon>
        </button>
      </Box>
    </Box>
  )
}
