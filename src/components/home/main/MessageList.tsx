import { Box } from '@chakra-ui/react'
import ScrollContainer from '@src/components/Atom/ScrollContainer'
import DetailCard from '@src/components/Molecule/DetailCard'
import React from 'react'
import { Link } from 'react-router-dom'

export default function MessageList() {
  return (
    <ScrollContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((el, i) => (
        <Link to={`/friend/${i}/chat`} key={`${el}`}>
          <Box w="100%" height="42px">
            <DetailCard
              mainText="차누다아asdasdasdasdasd"
              subText=""
              src="https://avatars.githubusercontent.com/u/93105924?s=400&v=4"
            />
          </Box>
        </Link>
      ))}
    </ScrollContainer>
  )
}
