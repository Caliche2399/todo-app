
export const todoReducer = (initialState, action) => {
    switch (action.type) {
        case 'AddToDo':
                return [...initialState, action.payload]
            break
        case 'RemoveToDo':
            console.log(action.payload)
            return initialState.filter(todo => todo.id !== action.payload)
        case 'CompleteToDo':
            return initialState.map( todo => {
                if(todo.id === action.payload){
                    return {
                        ...todo, 
                        done: !todo.done
                    }
                }

                return todo
            })
        default:
            return initialState;
    }
}