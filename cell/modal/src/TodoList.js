import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo }) {
    return(
        todos.map(todo => {     /*map current array*/
            return <Todo key = {todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    )
}
