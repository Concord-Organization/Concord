import { IChatInput } from '@src/interfaces/formInput/formInputInterface'
import { useSocket } from '@src/utils/customHook/socket'
import ChatView from '@src/view/home/FriendView'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function ChatViewModel() {
  const { sendMessage, chats } = useSocket()
  const { register, handleSubmit, setValue } = useForm<IChatInput>()

  const onValid: SubmitHandler<IChatInput> = (formData) => {
    if (formData.chat === '') return
    sendMessage(formData.chat)
    setValue('chat', '')
  }

  return (
    <ChatView
      chats={chats}
      onSubmit={handleSubmit(onValid)}
      register={register}
    />
  )
}
