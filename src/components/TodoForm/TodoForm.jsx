import React from 'react'

export const TodoForm = ({changeHandler, title, addHandler}) => {
    return (
        <div className="row mtx2">
            <div className="input-field col s12">
                <input id="text"
                       type="text"
                       value={title}
                       onKeyPress={(e) => addHandler(e)}
                       onChange={(e) => changeHandler(e)}
                       placeholder='Введите заметку'/>
            </div>
        </div>
    )
}


