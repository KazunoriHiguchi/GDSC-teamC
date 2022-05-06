import React, { useState, useRef, useEffect } from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'
//import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
//import './firework.js'

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
    if (name === '') return    /*if nothing is typed*/
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos () {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)

    /*return (
      <div style={{ backgroundImage: 'firework.html' }}></div>
    )*/
  }

  /*const AppButton = ({ onPress, title }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  );*/

  /*const styles = StyleSheet.create({
    appButtonContainer: {
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  })*/

  return (
    <>
      <TodoList todos={ todos } toggleTodo={toggleTodo}/>    {/*props */}
      <input ref={todoNameRef} type='text' />
      <button 
        onClick={handleAddTodo}
        //style={styles.buttonStyle}
      >追加</button>
      <button 
        onClick={handleClearTodos}
        //style={styles.buttonStyle}
      >完了</button>
      <div>残り{todos.filter(todo => !todo.complete).length}コ</div>
    </>
  )
}

export default App
