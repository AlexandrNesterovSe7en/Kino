import { Outlet } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import Registration from "../../2MODULES/Auth/Registration/Registration";
import { useEffect } from "react";
import { auth } from "../../FireBase/FireBase";
import { loginUser, setLoading } from "../../features/currentUserSlice/currentUserSlice";
import { onAuthStateChanged } from "firebase/auth";

const AuthPage = () => {
    const currentUser = useSelector(state => state.currentUser.user);
    const dispatch = useDispatch();

    useEffect(() => {
        // ставит прослушку на вход пользователя
        onAuthStateChanged(auth, authUser => {

            // Если пользователь вошёл, то добавляем его в редакс.
            if (authUser) {
                dispatch(loginUser({
                    uid: authUser.uid,
                    email: authUser.email,
                }));
                dispatch(setLoading(false));
            }
        })

    }, [])

    return currentUser ? <Outlet /> : <Registration />;
};

export default AuthPage;