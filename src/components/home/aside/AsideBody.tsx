import { Box } from '@chakra-ui/react'
import CardListContainer from '@src/components/Atom/CardListContainer'
import Card from '@src/components/Molecule/Card'
import DetailCard from '@src/components/Molecule/DetailCard'
import React from 'react'
import { FaUserAlt } from 'react-icons/fa'

export default function AsideBody() {
  return (
    <Box
      bg="gray"
      py="8px"
      px="8px"
      flex={1}
      display="flex"
      flexDirection="column"
    >
      <Card icon={<FaUserAlt size="24px" />} text="친구" />
      <Box
        h="100%"
        mt="10px"
        display="flex"
        flex={1}
        flexDirection="column"
        overflowY="scroll"
        css={{
          '&::-webkit-scrollbar': {
            width: '0px',
          },
          '&::-webkit-scrollbar-track': {
            width: '0px',
          },
        }}
      >
        <Box as="span" fontSize="12px" pl="8px">
          다이렉트 메시지
        </Box>
        <Box minH="100%" h="100%">
          <CardListContainer>
            {[
              1, 21, 1, 1, 1, 11, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              1, 1,
            ].map(() => (
              <Box as="li" w="100%">
                <DetailCard
                  mainText="차누다아"
                  subText=""
                  src="https://avatars.githubusercontent.com/u/93105924?s=400&v=4"
                />
              </Box>
            ))}
          </CardListContainer>
        </Box>
      </Box>
    </Box>
  )
}
