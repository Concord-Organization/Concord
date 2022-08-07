import Aside from '@src/components/home/aside/Aside'
import HomeContainer from '@src/components/home/HomeContainer'
import ChatMain from '@src/components/home/main/FriendMain'
import { IChatProps } from '@src/interfaces/component/componentInterface'

import React from 'react'

export default function ChatView({ chats, onSubmit, register }: IChatProps) {
  return (
    <HomeContainer>
      <Aside />
      <ChatMain chats={chats} onSubmit={onSubmit} register={register} />
    </HomeContainer>
  )
}
