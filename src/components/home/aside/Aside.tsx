import React from 'react'
// Component
import AsideBody from './AsideBody'
import AsideContainer from './AsideContainer'
import AsideFooter from './AsideFooter'
import AsideHeader from './AsideHeader'

// Home 화면 사이드에 있는 친구 목록과 친구 메시지 목록
export default function Aside() {
  return (
    <AsideContainer>
      {/* 친구 대화방을 검색하는 버튼이 있는 부분 */}
      <AsideHeader />
      {/* 친구와의 대화방 목록 있는 부분 */}
      <AsideBody />
      {/* 사용자의 간략한 정보와 마이크, 헤드셋, 설정을 바꿀 수 있는 부분 */}
      <AsideFooter />
    </AsideContainer>
  )
}
