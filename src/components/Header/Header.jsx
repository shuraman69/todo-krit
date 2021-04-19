import '../../App.css';
import {NavLink} from "react-router-dom";

export const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper px1">
                <NavLink to="/" className="brand-logo">TodoApp</NavLink>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/">Список дел</NavLink></li>
                    <li><NavLink to="/about">Информация</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}


