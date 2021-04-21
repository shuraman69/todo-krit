import {useHistory} from "react-router-dom";
import {useParams} from 'react-router-dom'
import {useSelector} from "react-redux";

export const About = () => {
    const history = useHistory()
    const {ID} = useParams()
    const titleRedux=useSelector(state => state.todo.title)

    const goBack = () => {
        history.push('/')
    }
    return (
        <>
            СТРАНИЦА ABOUT № {ID}
            {titleRedux}
            <button onClick={() => goBack()}>НАЗАД</button>
        </>
    )
}


