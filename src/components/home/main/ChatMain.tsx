import { Box, Input } from '@chakra-ui/react'
import { IChatProps } from '@src/interfaces/component/componentInterface'
import React from 'react'

export default function ChatMain({ chats, onSubmit, register }: IChatProps) {
  return (
    <>
      <Box>
        {chats.map((chat) => (
          <pre key={chat.id}>{chat.text}</pre>
        ))}
      </Box>
      <Box position="absolute" w="calc(100% - 40px)" bottom="25px">
        <form onSubmit={onSubmit}>
          <Input
            bg="blackAlpha.300"
            focusBorderColor="primary"
            {...register('chat')}
          />
        </form>
      </Box>
    </>
  )
}
