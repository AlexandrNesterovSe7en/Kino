import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./NavBar.module.css";
import { signOut } from "firebase/auth";
import { auth, database } from "../../FireBase/FireBase";
import SearchInput from "../../4UI/Input/SearchInput/SearchInput";
import { get, ref } from "firebase/database";
import { Link } from "react-router-dom";



const NavBar = ({ className }) => {

    const [active, setActive] = useState(undefined);
    const currentUser = useSelector(state => state.currentUser.user);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [isSubscribe, setIsSubscribe] = useState("");
    const subscribe = useSelector(state => state.currentUser.isSubscribe)
    

    useEffect(() => {
        if(currentUser) {
            get(ref(database, `Users/${auth.currentUser.uid}/isSubscribe`))
                .then(snap => {
                    setIsSubscribe(snap.val())
                })
            get(ref(database, `Users/${auth.currentUser.uid}/Name`))
                .then(snap => {
                    setName(snap.val())
                })
            get(ref(database, `Users/${auth.currentUser.uid}/Surname`))
                .then(snap => {
                    setSurname(snap.val())
                })
            get(ref(database, `Users/${auth.currentUser.uid}/Email`))
                .then(snap => {
                    setEmail(snap.val())
                })
        }
    }, [])

    function handleClickActive(e) {
        if (active === undefined) {
            setActive(cl.active);
        } else {
            setActive(undefined);
        }
    };

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
                    {/* <SearchInput /> */}
                </div>

                {/* Отображение кнопки Войти/Выйти */}
                <div className={cl.signIn}>
                    {
                        currentUser ?
                        <Link to="/profilePage" className={cl.profileLink}>
                            <div className={cl.profileWrapper} style={{borderColor: isSubscribe || subscribe ? "#1D79D2" : "grey", boxShadow: isSubscribe || subscribe ? "0 0 7px #1D79D2" : "0 0 0"}}>
                                <div className={cl.profileContainer}>
                                    {
                                        !name && !surname && email ? email[0].toUpperCase() :
                                            name && !surname ? name[0].toUpperCase() :
                                                !name && surname ? surname[0].toUpperCase() :
                                                    name && surname ? name[0].toUpperCase() + surname[0].toUpperCase() :
                                                        email && email[0].toUpperCase()
                                    }
                                </div>
                            </div>
                        </Link>
                            :
                            <NavBarLink path="/signIn" text="Войти" className={cl.signInLink} />
                    }
                </div>
            </nav>
        </>
    )
}

export default NavBar;