import { IChatProps } from '@src/interfaces/component/componentInterface'
import React, { memo } from 'react'
import { Route, Routes } from 'react-router-dom'
import ChatMain from './ChatMain'
import FileMain from './FileMain'
import FriendHeader from './FriendHeader'
import MainBodyContainer from './MainBodyContainer'
import MainContainer from './MainContainer'

function FriendMain({ chats, onSubmit, register }: IChatProps) {
  return (
    <MainContainer>
      <FriendHeader />
      <MainBodyContainer>
        <Routes>
          <Route path="file" element={<FileMain />} />
          <Route
            path="chat"
            element={
              <ChatMain chats={chats} onSubmit={onSubmit} register={register} />
            }
          />
          <Route path="phone" element={<>phone</>} />
        </Routes>
      </MainBodyContainer>
    </MainContainer>
  )
}

export default memo(FriendMain)
