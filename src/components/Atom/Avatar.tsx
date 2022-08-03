import { Image } from '@chakra-ui/react'
import React from 'react'

export default function Avatar({ src }: { src: string }) {
  return <Image src={src} boxSize="32px" borderRadius="full" />
}
