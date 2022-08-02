import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

export default function ChanelBadge({
  children,
}: {
  children: React.ReactNode
}) {
  const [hover, setHover] = useState(false)
  return (
    <>
      <Box
        bg="white"
        position="absolute"
        w="4px"
        h="20px"
        mt="14px"
        left={hover ? '0px' : '-4px'}
        borderRightRadius="10px"
        transition="all 0.2s"
      />
      <Box
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        bg="whiteAlpha.200"
        w="48px"
        h="48px"
        mx="auto"
        borderRadius="50%"
        color="primary"
        display="flex"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        transition="0.2s"
        _hover={{
          borderRadius: '17px',
          color: 'white',
          bg: 'primary',
        }}
      >
        {children}
      </Box>
    </>
  )
}
