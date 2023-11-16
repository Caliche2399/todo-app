import React from 'react'
import { ToDoItem } from './ToDoItem'

export const ToDoList = ({todos = [], onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className='list-group'>
        {
          todos.map(todo => (
              <ToDoItem 
                key={todo.id} 
                todo={todo} 
                onDeleteTodo={onDeleteTodo} 
                onToggleTodo= {onToggleTodo}/>
          ))
        }
    </ul>
  )
}
