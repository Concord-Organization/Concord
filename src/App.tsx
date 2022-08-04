import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Router from './Router'
import { theme } from './theme'

const queryClient = new QueryClient()

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <Router />
    </ChakraProvider>
  </QueryClientProvider>
)
