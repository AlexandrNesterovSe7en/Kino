
import { Link } from "react-router-dom";
import cl from "./NavBarLink.module.css";

const NavBarLink = ({ path, text, className }) => {
    return (
            <Link to={path} className={cl.navBarLink + ' ' + className}>
                <h3>{text}</h3>
            </Link>
    )
}

export default NavBarLink;