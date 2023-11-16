import React from 'react'
import { useReducer, useEffect } from 'react'
import { todoReducer } from './todoReducer'
import { ToDoList } from './ToDoList'
import { ToDoAdd } from './ToDoAdd'


const initialState = []

const init = ()=>{
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const ToDoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    

    const onAddTodo =(todo) => {
        const addAction = {
            type: 'AddToDo',
            payload: todo
        }

        dispatch(addAction)
    }

    const onHandleRemoveTodo = (id) =>{
        dispatch({
            type:'RemoveToDo',
            payload:id
        })
    }

    const onHandleToggleTodo = (id) =>{
        dispatch({
            type:'CompleteToDo',
            payload:id
        })
    }

    return (
        <>
            <h1>ToDo App ({todos.length}) <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ToDoList 
                        todos = {todos} 
                        onDeleteTodo= {onHandleRemoveTodo} 
                        onToggleTodo= {onHandleToggleTodo}/>
                </div>

                <div className="col-5">
                    <h4>Agregar Todo</h4>
                    <hr />
                    
                    <ToDoAdd onNewTodo = {onAddTodo}/>
                </div>

            </div>
        </>
    )
}
