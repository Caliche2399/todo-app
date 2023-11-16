

const initialState = [{
    id:1,
    todo: 'Recolectar la piedra del alma.',
    done: false,
}]

const todoReducer = (state = initialState, action = {}) =>{

    if (action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer()

const todo ={
    id: 2,
    todo: 'Recolectar piedra del poder.',
    done: false,
}

const addToDoAction = {
    type: '[TODO] add todo',
    payload: todo
}

todos = todoReducer(initialState, addToDoAction)
console.log({state: todos})