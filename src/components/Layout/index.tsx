import { Box } from '@chakra-ui/react'
import { tokenQuery } from '@src/queries/queryHooks/user'
import React from 'react'
import Header from './header/Header'

interface LayoutProps {
  header: boolean
  children: React.ReactNode
}

export default function Layout({ header, children }: LayoutProps) {
  const { isLoading } = tokenQuery()

  return (
    <Box>
      {isLoading ? null : (
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
      )}
    </Box>
  )
}
