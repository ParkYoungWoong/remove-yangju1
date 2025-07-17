import { useState } from 'react'
import { useTodoStore } from '../../stores/todo.js'

export default function TodoItem(props) {
  const todo = props.todo
  const deleteTodo = useTodoStore(s => s.deleteTodo)
  const updateTodo = useTodoStore(s => s.updateTodo)
  const [isEditing, setIsEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  function onEditMode() {
    setIsEditing(true)
  }
  function offEditMode() {
    setIsEditing(false)
    setText(todo.text)
  }
  async function handleSave() {
    if (text.trim() === '') return
    const newTodo = Object.assign({}, todo, {
      text: text.trim()
    })
    await updateTodo(newTodo)
    offEditMode()
  }

  return (
    <li>
      {isEditing ? (
        <>
          <input
            type="text"
            value={text}
            onChange={function (event) {
              setText(event.target.value)
            }}
          />
          <button onClick={offEditMode}>취소</button>
          <button onClick={handleSave}>저장</button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            defaultChecked={todo.done}
          />
          <span>{todo.text}</span>
          <button onClick={onEditMode}>수정</button>
          <button
            onClick={function () {
              deleteTodo(todo.id)
            }}>
            삭제
          </button>
        </>
      )}
    </li>
  )
}
