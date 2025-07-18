import { create } from 'zustand'

export const useTodoStore = create(function (set, get) {
  return {
    todos: [],
    text: '',
    order: 'asc',
    done: undefined,
    setText: function (text) {
      set({
        text: text
      })
    },
    ascending: function () {
      set({
        order: 'asc'
      })
      get().fetchTodos()
    },
    descending: function () {
      set({
        order: 'desc'
      })
      get().fetchTodos()
    },
    setDone: function (done) {
      set({
        done: done
      })
      get().fetchTodos()
    },
    fetchTodos: async function () {
      const order = get().order
      const done = get().done
      const res = await fetch(
        `http://localhost:3000/api/todos?order=${order}&done=${done}`,
        {
          method: 'GET'
        }
      )
      const data = await res.json()
      set({
        todos: data
      })
    },
    createTodo: async function () {
      const text = get().text
      const todos = get().todos
      if (text.trim() === '') return
      const res = await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          text: text.trim(),
          done: false
        })
      })
      const todo = await res.json()
      set({
        todos: todos.concat([todo]),
        text: ''
      })
    },
    updateTodo: async function (todo) {
      const res = await fetch(`http://localhost:3000/api/todos/${todo.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
      })
      const newTodo = await res.json()
      const todos = get().todos
      set({
        todos: todos.map(function (todo) {
          if (todo.id === newTodo.id) {
            return newTodo
          } else {
            return todo
          }
        })
      })
    },
    deleteTodo: async function (todoId) {
      const todos = get().todos
      const res = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
        method: 'DELETE'
      })
      const message = await res.json()
      // 목록에서 삭제
      const newTodos = todos.filter(function (todo) {
        return todo.id !== todoId
      })
      set({
        todos: newTodos
      })
      // 메세지 출력
      alert(message)
    }
  }
})
