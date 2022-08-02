import { Button } from '@chakra-ui/react'
import React from 'react'

export default function Submit({ text }: { text: string }) {
  return (
    <Button type="submit" bg="primary" h="44px" color="white" borderRadius={3}>
      {text}
    </Button>
  )
}
