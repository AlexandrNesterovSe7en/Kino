import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { auth } from "../../../../FireBase/FireBase";
import { loginUser, setLoading } from "../../../../features/currentUserSlice/currentUserSlice";
import { onAuthStateChanged } from "firebase/auth";
import MainSpinner from '../../../../4UI/Spinner/MainSpinner/MainSpinner';
import cl from './LoaderPage.module.css';

const LoaderPage = () => {
    const userLoading = useSelector(state => state.currentUser.isLoading);
    const [domLoading, setDomLoading] = useState(true);
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
            }
            // загрузка юзера завершена
            dispatch(setLoading(false));
        });

        // Загрузка DOM элементов завершена
        setDomLoading(false);

        return () => {
            unscribe()
        };

    }, [])

    return (
        <>
            {userLoading || domLoading ?
                <div className={cl.container}>
                    <MainSpinner />
                </div>
                :
                <Outlet />
            }
        </>
    )
};

export default LoaderPage;