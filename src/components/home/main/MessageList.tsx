import { Box } from '@chakra-ui/react'
import ScrollContainer from '@src/components/Atom/ScrollContainer'
import DetailCard from '@src/components/Molecule/DetailCard'
import React from 'react'

export default function MessageList() {
  return (
    <ScrollContainer>
      {[
        1, 21, 1, 1, 1, 11, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      ].map(() => (
        <Box w="100%" height="42px">
          <DetailCard
            mainText="차누다아asdasdasdasdasd"
            subText=""
            src="https://avatars.githubusercontent.com/u/93105924?s=400&v=4"
          />
        </Box>
      ))}
    </ScrollContainer>
  )
}
