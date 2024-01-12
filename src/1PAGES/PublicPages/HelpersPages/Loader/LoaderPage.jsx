import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../../../../FireBase/FireBase";
import { logOutUser, loginUser, setLoading } from "../../../../features/currentUserSlice/currentUserSlice";
import { onAuthStateChanged } from "firebase/auth";
import MainSpinner from '../../../../4UI/Spinner/MainSpinner/MainSpinner';
import cl from './LoaderPage.module.css';
import NavBar from "../../../../2MODULES/NavBar/NavBar";
import FooterForFirstPage from "../../../../2MODULES/FooterForFirstPage/FooterForFirstPage";

const LoaderPage = () => {
    const userLoading = useSelector(state => state.currentUser.isLoading);
    const [scroll, setScroll] = useState(0)
    const dispatch = useDispatch();


    function handleScroll() {
        setScroll(window.scrollY);
    }

    function handleUpButton() {
        window.scrollTo(0, 0)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    useEffect(() => {
        // ставит прослушку на вход пользователя
        const unscribe = onAuthStateChanged(auth, authUser => {

            // Если пользователь вошёл, то добавляем его в редакс.
            if (authUser) {
                dispatch(loginUser({
                    uid: authUser.uid,
                    email: authUser.email,
                }));
            } else {
                dispatch(logOutUser());
            }
            // загрузка юзера завершена
            dispatch(setLoading(false));
        });


        return () => {
            unscribe()
        };
        // eslint-disable-next-line
    }, [])

    return (
        <>
            {userLoading ?
                <div className={cl.container}>
                    <MainSpinner />
                </div>
                :
                <div className={cl.mainWrapper}>
                    <div className={cl.navBarWrapper}>
                        <NavBar />
                        <Outlet />
                    </div>
                    <FooterForFirstPage />
                    <button className={scroll < 300 ? cl.none : cl.show} onClick={handleUpButton}>
                        <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.2929 15.2893C18.6834 14.8988 18.6834 14.2656 18.2929 13.8751L13.4007 8.98766C12.6195 8.20726 11.3537 8.20757 10.5729 8.98835L5.68257 13.8787C5.29205 14.2692 5.29205 14.9024 5.68257 15.2929C6.0731 15.6835 6.70626 15.6835 7.09679 15.2929L11.2824 11.1073C11.673 10.7168 12.3061 10.7168 12.6966 11.1073L16.8787 15.2893C17.2692 15.6798 17.9024 15.6798 18.2929 15.2893Z" fill="#0F0F0F" />
                        </svg>
                    </button>
                </div>
            }
        </>
    )
};

export default LoaderPage;