import { Box } from '@chakra-ui/react'
import React from 'react'

export default function CardContainer({
  children,
  noHover,
}: {
  children: React.ReactNode
  noHover?: boolean
}) {
  return (
    <Box
      w="100%"
      h="100%"
      px="8px"
      borderRadius="3px"
      cursor="pointer"
      _hover={noHover ? { bg: 'primary' } : {}}
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {children}
    </Box>
  )
}

CardContainer.defaultProps = {
  noHover: true,
}
