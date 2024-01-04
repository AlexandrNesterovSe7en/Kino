import { NavLink } from "react-router-dom";
import cl from "./NavBarLink.module.css";

const NavBarLink = ({ path, text }) => {
    return (
        // Отображает навигационную ссылку и показывает ее активность
        <NavLink to={path} className={({ isActive }) => [
                isActive ? cl.active : '',
                cl.navBarLink
            ].join(' ')
        }
        >
            <h3>{text}</h3>
        </NavLink>
    )
}

export default NavBarLink;