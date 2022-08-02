import React from 'react'
import { IoCompassSharp } from 'react-icons/io5'
import { IoIosAdd } from 'react-icons/io'
import ChanelBadge from './ChanelBadge'
import ChanelListContainer from './ChanelListContainer'

export default function ChanelOptionList() {
  return (
    <ChanelListContainer>
      <li>
        <ChanelBadge>
          <IoIosAdd size={30} />
        </ChanelBadge>
      </li>
      <li>
        <ChanelBadge>
          <IoCompassSharp size={25} />
        </ChanelBadge>
      </li>
    </ChanelListContainer>
  )
}
