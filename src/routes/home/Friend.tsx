import Layout from '@src/components/Layout'
import ChatViewModel from '@src/viewModel/home/FriendViewModel'
import React from 'react'

export default function Chat() {
  return (
    <Layout header>
      <ChatViewModel />
    </Layout>
  )
}
