import './App.css';
import {Header} from "./components/Header/Header";
import {TodoPage} from "./components/TodoPage/TodoPage";
import {useState} from "react";
import {TodoForm} from "./components/TodoForm/TodoForm";
import {BrowserRouter, Route} from 'react-router-dom'
import {About} from "./components/About";

export const App = () => {
    const [todos, setTodos] = useState([])
    const [title, setTitle] = useState('')

    const changeHandler = (e) => {
        setTitle(e.target.value)
    }

    const addHandler = (e) => {
        if (e.key === "Enter") {
            let newTodo = {
                title: title,
                completed: false,
                id: Date.now()
            }
            setTodos(prev => [...prev, newTodo])
            setTitle('')
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
    return (
        <BrowserRouter>
            <Header/>
            <TodoForm addHandler={addHandler} title={title} changeHandler={changeHandler}/>
            <Route path='/' exact
                   render={() => <TodoPage deleteHandler={deleteHandler} completeHandler={completeHandler}
                                           todos={todos}/>}/>
            <Route path='/about' exact render={() => <About/>}/>
        </BrowserRouter>
    );
}


