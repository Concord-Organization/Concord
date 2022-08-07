import { Box } from '@chakra-ui/react'
import BigIcon from '@src/components/Atom/BigIcon'
import HeaderContainer from '@src/components/Atom/HeaderContainer'
import ListHeader from '@src/components/Molecule/ListHeader'
import { memo } from 'react'
import { BsFillCameraVideoFill, BsFillChatLeftDotsFill } from 'react-icons/bs'
import { RiFileList2Line } from 'react-icons/ri'
import { Link } from 'react-router-dom'

function FriendHeader() {
  return (
    <HeaderContainer>
      <Box w="full" display="flex" justifyContent="space-between" pr="15px">
        <ListHeader title="용현" />
        <Box display="flex" gap={4}>
          <Link to="chat">
            <BigIcon>
              <BsFillChatLeftDotsFill />
            </BigIcon>
          </Link>
          <Link to="file">
            <BigIcon>
              <RiFileList2Line />
            </BigIcon>
          </Link>
          <Link to="phone">
            <BigIcon>
              <BsFillCameraVideoFill />
            </BigIcon>
          </Link>
        </Box>
      </Box>
    </HeaderContainer>
  )
}

export default memo(FriendHeader)
