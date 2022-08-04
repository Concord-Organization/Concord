import React from 'react'
import MainBody from './MainBody'
import MainContainer from './MainContainer'
import MainHeader from './MainHeader'

// 메인 화면
export default function Main() {
  return (
    <MainContainer>
      {/* 친구 목록 카테고리와 친구 추가 버튼이 있는 헤더 */}
      <MainHeader />
      {/* 위 카테고리에 따른 친구들 목록  */}
      <MainBody />
    </MainContainer>
  )
}
