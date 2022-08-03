import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './header/Header'

interface LayoutProps {
  header: boolean
  children: React.ReactNode
}

export default function Layout({ header, children }: LayoutProps) {
  return (
    <Box display="flex" w="100vw" h="100%">
      {header && <Header />}
      {children}
    </Box>
  )
}
