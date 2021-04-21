import './App.css';
import {Header} from "./components/Header/Header";
import {TodoPage} from "./components/TodoPage/TodoPage";
import {BrowserRouter, Route} from 'react-router-dom'
import {About} from "./components/About";
import {Provider} from "react-redux";
import {store} from './redux/store'

export const App = () => {

    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Route path='/' exact
                       render={() => <TodoPage/>}/>
                <Route path='/about' exact render={() => <About/>}/>
            </BrowserRouter>
        </Provider>
    );
}


