import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])    //object destructuring 
  const todoNameRef = useRef()

  useEffect(() => {   /*storing*/
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {   /*getting*/
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo (id) {
    const newTodos = [...todos]   /*create copy*/
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo (e) {
    const name = todoNameRef.current.value
    if (name == '') return console.log(name)    /*if nothing is typed*/
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos () {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={ todos } toggleTodo={toggleTodo}/>    {/*props */}
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>追加</button>
      <button onClick={handleClearTodos}>削除</button>
      {/*<div>残り{todos.filter(todo => !todo.complete).length}コ</div>*/}
    </>
  )
}

export default App;
