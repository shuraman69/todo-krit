import React from 'react'
import {useSelector} from "react-redux";

export const TodoForm = ({changeHandler,  addHandler}) => {
    const titleRedux=useSelector(state => state.todo.title)

    return (
        <div className="row mtx2">
            <div className="input-field col s12">
                <input id="text"
                       type="text"
                       value={titleRedux}
                       onKeyPress={(e) => addHandler(e)}
                       onChange={(e) => changeHandler(e)}
                       placeholder='Введите заметку'/>
            </div>
        </div>
    )
}


