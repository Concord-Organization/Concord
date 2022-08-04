import { Box } from '@chakra-ui/react'
import DetailCard from '@src/components/Molecule/DetailCard'
import React from 'react'
import { BsFillMicFill, BsFillMicMuteFill } from 'react-icons/bs'
import { TbHeadphones, TbHeadphonesOff } from 'react-icons/tb'
import { RiSettings5Fill } from 'react-icons/ri'
import ToggleButton from '@src/components/Molecule/ToggleButton'
import Icon from '@src/components/Atom/Icon'

// 사용자 정보와 마이크 헤드셋 환경설정 이 있는 Footer
export default function AsideFooter() {
  return (
    <Box
      minH="52px"
      display="flex"
      alignItems="center"
      bg="blackAlpha.300"
      pr="8px"
      boxSizing="border-box"
    >
      <DetailCard
        mainText="차누다아asdasdsdfahsdfashdflkjashdfjkh"
        subText="#3589"
        Hover={false}
        src="https://avatars.githubusercontent.com/u/93105924?s=400&v=4"
      />
      <Box display="flex">
        <ToggleButton
          icons={[
            <BsFillMicFill size="20px" />,
            <BsFillMicMuteFill size="20px" />,
          ]}
        />
        <ToggleButton
          icons={[
            <TbHeadphones size="20px" />,
            <TbHeadphonesOff size="20px" />,
          ]}
        />
        <button type="button">
          <Icon>
            <RiSettings5Fill size="20px" />
          </Icon>
        </button>
      </Box>
    </Box>
  )
}
