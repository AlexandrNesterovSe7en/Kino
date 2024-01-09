import { useSelector } from "react-redux";
import { useState } from "react";
import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./NavBar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase/FireBase";
import SearchInput from "../../4UI/Input/SearchInput/SearchInput";



const NavBar = ({ className }) => {

    const [active, setActive] = useState(undefined);
    const currentUser = useSelector(state => state.currentUser.user);

    function handleClickActive(e) {
        if (active === undefined) {
            setActive(cl.active);
        } else {
            setActive(undefined);
        }
    };

    function logOut() {
        // Отвечает за выход из аккаунта
        signOut(auth).then(() => {

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div onClick={handleClickActive} className={cl.header_burger + ' ' + active}>
                <span></span>
            </div>
            <nav className={cl.navBar + ' ' + className}>
                {/*  Костыль)
                     По факту должен быть логотип */}
                <div className={cl.helperForCenter}>

                </div>

                {/* Главная навигация сайта */}
                <div onClick={() => active ? handleClickActive() : null} className={cl.navigation}>
                    <NavBarLink path="/" text="Главная" />
                    <NavBarLink path="/Categories" text="Категории" />
                    <NavBarLink path="/FavoritePage" text="Избранное" />
                    <SearchInput />
                </div>

                {/* Отображение кнопки Войти/Выйти */}
                <div className={cl.signIn}>
                    {
                        currentUser ?
                            <a href="/"><button onClick={logOut} className={cl.logOut}>Выйти</button></a>
                            :
                            <NavBarLink path="/signIn" text="Войти" className={cl.signInLink} />
                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar;