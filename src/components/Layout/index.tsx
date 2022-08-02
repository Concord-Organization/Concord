import { Box } from '@chakra-ui/react'
import React from 'react'
import Header from './header/Header'

interface LayoutProps {
  children: React.ReactNode
  isHeader: boolean
}

export default function Layout({ children, isHeader }: LayoutProps) {
  return (
    <Box>
      {isHeader && <Header />}
      {children}
    </Box>
  )
}
