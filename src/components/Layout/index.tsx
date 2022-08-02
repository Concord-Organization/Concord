import { Box } from '@chakra-ui/react'
import React from 'react'
import Aside from './header/Header'

interface LayoutProps {
  header: boolean
  children: React.ReactNode
}

export default function Layout({ header, children }: LayoutProps) {
  return (
    <Box>
      {header && <Aside />}
      {children}
    </Box>
  )
}
