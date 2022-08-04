import React, { useState } from 'react'
import Icon from '../Atom/Icon'

// 토글용 버튼 Icon을 2개 받아옴
export default function ToggleButton({ icons }: { icons: React.ReactNode[] }) {
  const [on, setOn] = useState(true)
  return (
    <button type="button" onClick={() => setOn((prev) => !prev)}>
      <Icon>{on ? icons[0] : icons[1]}</Icon>
    </button>
  )
}
