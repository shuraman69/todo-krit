import '../../App.css';

export const TodoPage = ({todos,completeHandler,deleteHandler}) => {
    return (
        <>
            {todos.map(item => {
                return (
                    <li key={item.id} className={'todo'}>
                        <label>
                            <input type="checkbox" checked={item.completed}
                                   onChange={()=>completeHandler(item.id)}
                            />
                            <span>{item.title}</span>
                            <i className="material-icons red-text" onClick={()=>deleteHandler(item.id)}>delete</i>
                        </label>
                    </li>
                )
            })}

        </>
    )
}


