import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "../../../../FireBase/FireBase";
import { logOutUser, loginUser, setLoading } from "../../../../features/currentUserSlice/currentUserSlice";
import { onAuthStateChanged } from "firebase/auth";
import MainSpinner from '../../../../4UI/Spinner/MainSpinner/MainSpinner';
import cl from './LoaderPage.module.css';
import NavBar from "../../../../2MODULES/NavBar/NavBar";
import FooterForFirstPage from "../../../../2MODULES/FooterForFirstPage/FooterForFirstPage";

const LoaderPage = () => {
    const userLoading = useSelector(state => state.currentUser.isLoading);
    const dispatch = useDispatch();

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
                <>
                    <NavBar />
                    <Outlet />
                    <FooterForFirstPage />
                </>
            }
        </>
    )
};

export default LoaderPage;