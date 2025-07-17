import { useState } from 'react'
import Button from './components/Button.jsx'

export default function App() {
  const [isLoadingForCancel, setIsLoadingForCancel] = useState(false)
  const [isLoadingForSave, setIsLoadingForSave] = useState(false)
  const [isLoadingForDelete, setIsLoadingForDelete] = useState(false)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        alignItems: 'flex-start'
      }}>
      <Button
        variant="secondary"
        loading={isLoadingForCancel}
        onClick={function () {
          setIsLoadingForCancel(!isLoadingForCancel)
        }}>
        취소
      </Button>
      <Button
        variant="primary"
        width={100}
        loading={isLoadingForSave}
        onClick={function () {
          setIsLoadingForSave(!isLoadingForSave)
        }}>
        저장
      </Button>
      <Button
        variant="danger"
        width={70}
        loading={isLoadingForDelete}
        onClick={function () {
          setIsLoadingForDelete(!isLoadingForDelete)
        }}>
        삭제
      </Button>
    </div>
  )
}
