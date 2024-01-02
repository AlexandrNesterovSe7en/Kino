
import { useSelector } from "react-redux";

import { useState } from "react";

import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./NavBar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase/FireBase";



const NavBar = ({ className }) => {

    const [active, setActive] = useState(undefined);
    const currentUser = useSelector(state => state.currentUser.user);

    function handleClickActive(e) {
        if(active === undefined){
            setActive(cl.active);
        } else{
            setActive(undefined);
        }
    };

    function logOut() {
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
                <div>

                </div>
                <div onClick={handleClickActive} className={cl.navigation}>
                    <NavBarLink path="/" text="Главная" />
                    <NavBarLink path="/Categories" text="Категории" />
                    <NavBarLink path="/FavoritePage" text="Избранное" />
                </div>
                <div className={cl.signIn}>
                    {
                        currentUser ? 
                        <button onClick={logOut} className={cl.logOut}>Выйти</button>
                        :
                        <NavBarLink path="/signIn" text="Войти" className={cl.signInLink}/>
                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar;