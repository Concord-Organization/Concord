import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './header/Header'

interface LayoutProps {
  isHeader: boolean
  children: React.ReactNode
}

export default function Layout({ isHeader, children }: LayoutProps) {
  return (
    <Box>
      {isHeader && <Header />}
      {children}
    </Box>
  )
}
