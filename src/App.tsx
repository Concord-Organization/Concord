import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Router from './Router'
import { theme } from './theme'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Router />
  </ChakraProvider>
)
