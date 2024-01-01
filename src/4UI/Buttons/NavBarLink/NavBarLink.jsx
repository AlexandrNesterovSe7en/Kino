
import { Link } from "react-router-dom";
import cl from "./NavBarLink.module.css";

const NavBarLink = ({ path, text }) => {
    return (
        <div>
            <Link to={path} className={cl.navBarLink}>
                <h3>{text}</h3>
            </Link>
        </div>
    )
}

export default NavBarLink;