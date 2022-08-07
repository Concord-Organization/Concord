import { IChats } from '@src/utils/customHook/socket'
import React, { FormEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { IChatInput } from '../formInput/formInputInterface'

export interface IChildrenProps {
  children: React.ReactNode
}

export interface ICardProps {
  mainText: string
  subText: string
  Hover?: boolean
  src: string
}

export interface IChatProps {
  // eslint-disable-next-line no-unused-vars
  onSubmit: (e: FormEvent<HTMLFormElement>) => void
  chats: IChats[]
  register: UseFormRegister<IChatInput>
}
