import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './header/Header'

interface LayoutProps {
  header: boolean
  children: React.ReactNode
}

export default function Layout({ header, children }: LayoutProps) {
  return (
    <Box
      display="inline-flex"
      h="100vh"
      w="100vw"
      overflowX="auto"
      overflowY="hidden"
    >
      {header && <Header />}
      {children}
    </Box>
  )
}
