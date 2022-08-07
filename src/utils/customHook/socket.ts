import { useEffect, useState } from 'react'
import io from 'socket.io-client'

const socket = io('http://localhost:4000')

export interface IChats {
  id: string
  text: string
}

export function useSocket() {
  const [chats, setChats] = useState<IChats[]>([])

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connect')
    })

    socket.on('disconnect', () => {
      console.log('disconnect')
    })

    socket.on('events', ({ data }: any) => {
      console.log(data)
      setChats((prev) => [...prev, { text: data, id: Date.toString() }])
    })

    return () => {
      socket.off('connect')
      socket.off('disconnect')
      socket.off('events')
    }
  }, [])

  const sendMessage = (data: string) => {
    socket.emit('events', { data })
  }

  return {
    sendMessage,
    chats,
  }
}
