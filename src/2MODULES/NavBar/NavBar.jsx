import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./NavBar.module.css";


const NavBar = ({ className }) => {
    return (
        <nav className={cl.navBar + ' ' + className}>
            <NavBarLink path="/" text="Главная" />
            <NavBarLink path="/Categories" text="Категории" />
            <NavBarLink path="/FavoritePage" text="Избранное" />
        </nav>
    )
}

export default NavBar;