import { Box } from '@chakra-ui/react'
import React from 'react'
import Avatar from '../Atom/Avatar'
import CardContainer from '../Atom/CardContainer'
import CardRight from '../Atom/CardRight'

export default function DetailCard({
  mainText,
  subText,
  Hover,
  src,
}: {
  mainText: string
  subText: string
  Hover?: boolean
  src: string
}) {
  return (
    <CardContainer noHover={Hover}>
      <Box mr="8px">
        <Avatar src={src} />
      </Box>
      <CardRight>
        <Box
          fontSize="16px"
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
