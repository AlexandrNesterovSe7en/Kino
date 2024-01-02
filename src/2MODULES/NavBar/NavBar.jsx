import { useSelector } from "react-redux";
import NavBarLink from "../../4UI/Buttons/NavBarLink/NavBarLink";
import cl from "./NavBar.module.css";
import { signOut } from "firebase/auth";
import { auth } from "../../FireBase/FireBase";



const NavBar = ({ className }) => {

    const currentUser = useSelector(state => state.currentUser.user);

    function logOut() {
        signOut(auth).then(() => {

        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <nav className={cl.navBar + ' ' + className}>
            <div>

            </div>
            <div className={cl.navigation}>
                <NavBarLink path="/" text="Главная" />
                <NavBarLink path="/Categories" text="Категории" />
                <NavBarLink path="/FavoritePage" text="Избранное" />
            </div>
            <div className={cl.signIn}>
                {
                    currentUser ? 
                    <button onClick={logOut}>Выйти</button>
                     :
                    <NavBarLink path="/signIn" text="Войти" className={cl.signInLink}/>
                }
            </div>
        </nav>
    )
}

export default NavBar;