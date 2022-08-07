import ScrollContainer from '@src/components/Atom/ScrollContainer'
import OptionDetailCard from '@src/components/Molecule/OptionDetailCard'
import React from 'react'
import { Link } from 'react-router-dom'

export default function FriendList() {
  return (
    <ScrollContainer>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((el) => (
        <Link to={`/friend/${el}/chat`}>
          <OptionDetailCard
            key={el}
            mainText={`${el}`}
            subText="온라인"
            src="https://avatars.githubusercontent.com/u/93105924?s=400&v=4"
          />
        </Link>
      ))}
    </ScrollContainer>
  )
}
