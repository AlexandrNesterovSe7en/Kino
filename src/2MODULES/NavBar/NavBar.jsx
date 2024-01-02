import { useState } from "react";
import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./NavBar.module.css";


const NavBar = ({ className }) => {
    const [active, setActive] = useState(undefined);

    function handleClickActive(e) {
        if(active === undefined){
            setActive(cl.active);
        } else{
            setActive(undefined);
        }
    };

    return (
        <>
            <div onClick={handleClickActive} className={cl.header_burger + ' ' + active}>
                <span></span>
            </div>
            <nav className={cl.navBar + ' ' + className}>
                <NavBarLink path="/" text="Главная" />
                <NavBarLink path="/Categories" text="Категории" />
                <NavBarLink path="/FavoritePage" text="Избранное" />
            </nav>
        </>
    )
}

export default NavBar;