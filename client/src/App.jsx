import { useTodoStore } from './stores/todo.js'

// 일반 함수 => function (매개변수) { return 데이터 }
// 화살표 함수 => 매개변수 => 데이터

export default function App() {
  const ascending = useTodoStore(s => s.ascending)
  const descending = useTodoStore(s => s.descending)
  const setDone = useTodoStore(s => s.setDone)

  return (
    <>
      <div>
        <button onClick={ascending}>오름차순</button>
        <button onClick={descending}>내림차순</button>
        <button
          onClick={function () {
            setDone(undefined)
          }}>
          전체
        </button>
        <button
          onClick={function () {
            setDone(true)
          }}>
          완료
        </button>
        <button
          onClick={function () {
            setDone(false)
          }}>
          할 일
        </button>
      </div>
    </>
  )
}
