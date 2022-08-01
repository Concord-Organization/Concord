import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import Router from './Router'

export const App = () => (
  <ChakraProvider>
    <Router />
  </ChakraProvider>
)
