import './App.css';
import {Header} from "./components/Header/Header";
import {TodoPage} from "./components/TodoPage/TodoPage";
import {BrowserRouter, Route} from 'react-router-dom'
import {About} from "./components/About";

export const App = () => {

    return (
        <BrowserRouter>
            <Header/>
            <Route path='/' exact
                   render={() => <TodoPage/>}/>
            <Route path='/about' exact render={() => <About/>}/>
        </BrowserRouter>
    );
}


