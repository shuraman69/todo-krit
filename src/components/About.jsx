import {useHistory} from "react-router-dom";

export const About = () => {
    const history = useHistory()

    const goBack = () => {
        history.push('/')
    }
    return (
        <>
            СТРАНИЦА ABOUT
            <button onClick={() => goBack()}>НАЗАД</button>
        </>
    )
}


