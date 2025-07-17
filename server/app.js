import express from 'express'
import cors from 'cors'
import { nanoid } from 'nanoid'
import db from './db.js'

const app = express()

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:5174'] }))
app.use(express.json())

// http://localhost:3000/api/todos
app.get('/api/todos', function (req, res) {
  db.read()
  res.json(db.data.todos)
})

// http://localhost:3000/api/todos
app.post('/api/todos', function (req, res) {
  db.read()
  const newTodo = {
    id: nanoid(),
    text: req.body.text,
    done: req.body.done
  }
  db.data.todos.push(newTodo)
  db.write()
  res.json(newTodo)
})

// 수정
// http://localhost:3000/api/todos/abx112
app.put('/api/todos/:todoId', function (req, res) {
  console.log('req.body', req.body)
  db.read()
  const todoId = req.params.todoId
  const todo = db.data.todos.find(function (todo) {
    return todo.id === todoId
  })
  todo.text = req.body.text
  todo.done = req.body.done
  db.write()
  res.json(todo)
})

// 삭제
// http://localhost:3000/api/todos/RthzyQ4hNS1zBRHYlBada
app.delete('/api/todos/:todoId', function (req, res) {
  db.read()
  const todoId = req.params.todoId
  const index = db.data.todos.findIndex(function (todo) {
    return todo.id === todoId
  })
  db.data.todos.splice(index, 1)
  db.write()
  res.json('도시락 다 쌌어요~😘')
})

app.listen(3000, function () {
  console.log('서버 3000번 포트로 열렸어요~😘')
})
