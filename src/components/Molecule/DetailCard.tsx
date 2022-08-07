import { Box } from '@chakra-ui/react'
import { ICardProps } from '@src/interfaces/component/componentInterface'
import React from 'react'
import Avatar from '../Atom/Avatar'
import CardContainer from '../Atom/CardContainer'
import CardRight from '../Atom/CardRight'

// 아바타와 메인 서브 텍스트가 있는 카드
export default function DetailCard({
  mainText,
  subText,
  Hover,
  src,
}: ICardProps) {
  return (
    <CardContainer noHover={Hover}>
      <Avatar src={src} />
      <CardRight>
        <Box
          fontSize="14px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
          lineHeight="20px"
        >
          {mainText}
        </Box>
        <Box
          fontSize="12px"
          textOverflow="ellipsis"
          whiteSpace="nowrap"
          overflow="hidden"
          lineHeight="16px"
          mt="-3px"
        >
          {subText}
        </Box>
      </CardRight>
    </CardContainer>
  )
}

DetailCard.defaultProps = {
  Hover: true,
}
