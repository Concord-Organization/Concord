import Aside from '@src/components/home/aside/Aside'
import HomeContainer from '@src/components/home/HomeContainer'
import Main from '@src/components/home/main/Main'
import React from 'react'

export default function HomeView() {
  return (
    <HomeContainer>
      <Aside />
      <Main />
    </HomeContainer>
  )
}
