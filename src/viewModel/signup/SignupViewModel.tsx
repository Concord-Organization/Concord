import { ISignupInput } from '@src/interfaces/formInput/formInputInterface'
import SignupView from '@src/view/signup/SignupView'

import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function SignupViewModel() {
  const [emailConfirm, setEmailConfirm] = useState({
    value: '',
    confirm: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<ISignupInput>()

  // validation 통과 시 실행 될 함수 formDate에 input 값들 담김
  const onValid: SubmitHandler<ISignupInput> = (formData) => {
    // 이메일 내용 변경 시 이메일 중복 확인 초기화
    if (formData.email !== emailConfirm.value) {
      setEmailConfirm((prev) => ({ ...prev, confirm: false }))
    }
    // == email 중복 확인 안했으면 에러 설정==
    if (!emailConfirm.confirm) {
      setError('email', { message: '이메일 중복확인을 해주세요.' })
      return
    }
    // ==비밀번호 다르면 에러 설정==
    if (formData.password !== formData.confirmPassword) {
      setError('confirmPassword', { message: '비밀번호와 다릅니다.' })
    }
    console.log(formData)
  }
  const onButtonsClicks = {
    email: () => {
      const email = getValues('email')
      // 이메일이 비어있으면 리턴
      if (email === '') return
      // ==이메일이 확인 되었을 때==
      if (email) {
        // 이메일 확인 state 설정
        setEmailConfirm((prev) => ({ ...prev, confirm: true }))
        // 사용 가능 메시지 넘기기 (원래는 error설정 메소드지만 이번에는 helper 메시지 설정)
        setError('email', {
          type: 'confirm',
          message: '사용 가능한 이메일입니다.',
        })
      }
      // ==이메일이 중복 됬을 때==
      // setError('email', {
      //   message: '중복된 이메일 입니다.',
      // })
    },
  }

  return (
    <SignupView
      errors={errors}
      register={register}
      onSubmit={handleSubmit(onValid)}
      onButtonsClicks={onButtonsClicks}
    />
  )
}
