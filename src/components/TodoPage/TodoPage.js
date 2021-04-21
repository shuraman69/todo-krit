import '../../App.css';
import {TodoForm} from "../TodoForm/TodoForm";
import {useEffect, useState} from 'react'
import {setTitleThunk, setTodoThunk} from "../../redux/reducers/todoReducer";
import {useDispatch, useSelector} from "react-redux";

export const TodoPage = () => {
    const dispatch = useDispatch()
    const titleRedux = useSelector(state => state.todo.title)
    const todosRedux = useSelector(state => state.todo.todos)
//можно удалить
    const [todos, setTodos] = useState([])


    const changeHandler = (e) => {
        dispatch(setTitleThunk(e.target.value))
    }

    const addHandler = (e) => {
        if (e.key === "Enter") {
            let newTodo = {
                title: titleRedux,
                completed: false,
                id: Date.now()
            }
            dispatch(setTodoThunk(newTodo))
            dispatch(setTitleThunk(''))
        }
    }


    const completeHandler = async (todoId) => {
        await setTodos(prev => prev.map(item => {
            if (todoId === item.id) {
                item.completed = true
            }
            return item
        }))
    }
    const deleteHandler = async (todoId) => {
        await setTodos(prev => prev.filter(item => item.id !== todoId))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos') || '[]')
        setTodos(todos)
    }, [])
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    return (
        <>
            <TodoForm addHandler={addHandler} changeHandler={changeHandler}/>
            <ul>
                {todosRedux.map(item => {
                    return (
                        <li key={item.id} className={'todo'}>
                            <label>
                                <input type="checkbox" checked={item.completed}
                                       onChange={() => completeHandler(item.id)}
                                />
                                <span>{item.title}</span>
                                <i className="material-icons red-text" onClick={() => deleteHandler(item.id)}>delete</i>
                            </label>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}


