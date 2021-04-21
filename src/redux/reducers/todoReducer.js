const SET_INPUT_VALUE = "SET_INPUT_VALUE"
const SET_TODO = "SET_TODO"

const initialState = {
    todos: [],
    title: ''
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE: {

            return {
                ...state,
                title: action.value
            }
        }
        case SET_TODO: {
            return {
                ...state,
                todos: [...state.todos,action.todo]
            }
        }
        default:
            return state;

    }
}
const setInputAction = (value) => ({type: SET_INPUT_VALUE, value})

export const setTitleThunk = (value) => {
    return async (dispatch) => {
        dispatch(setInputAction(value))
    }
}
const setTodoAction = (todo) => ({type: SET_TODO, todo})

export const setTodoThunk = (todo) => {
    return async (dispatch,getState) => {

        const state=getState()
        console.log(state)
        dispatch(setTodoAction(todo))
    }
}


export default todoReducer