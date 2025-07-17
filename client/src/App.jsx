import { useEffect } from 'react'
import TodoItem from './components/todos/TodoItem.jsx'
import { useTodoStore } from './stores/todo.js'

// 일반 함수 => function (매개변수) { return 데이터 }
// 화살표 함수 => 매개변수 => 데이터

export default function App() {
  const todos = useTodoStore(s => s.todos)
  const text = useTodoStore(s => s.text)
  const setText = useTodoStore(s => s.setText)
  const fetchTodos = useTodoStore(s => s.fetchTodos)
  const createTodo = useTodoStore(s => s.createTodo)

  useEffect(function () {
    fetchTodos()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <div>
        <input
          type="text"
          value={text}
          onChange={function (event) {
            setText(event.target.value)
          }}
          onKeyDown={function (event) {
            if (event.nativeEvent.isComposing) return
            if (event.key === 'Enter') createTodo()
          }}
        />
        <button onClick={createTodo}>추가</button>
      </div>
      <ul>
        {todos.map(function (todo) {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          )
        })}
      </ul>
    </>
  )
}
