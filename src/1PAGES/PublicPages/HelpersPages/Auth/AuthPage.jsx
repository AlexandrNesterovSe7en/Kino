import { useSelector } from "react-redux";
import Registration from "../../../../2MODULES/Auth/Registration/Registration";
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { auth } from "../../../../FireBase/FireBase";
import { database } from "../../../../FireBase/FireBase";
import { child, push, ref, set, update } from "firebase/database";

// Проверяет зарегестрирован ли пользователь
const AuthPage = () => {
    const currentUser = useSelector(state => state.currentUser.user);
    const navigate = useNavigate();
    const locationState = useLocation();
    const prevRef = locationState.state;

    useLayoutEffect(() => {
        if(currentUser) {
            if (prevRef) {
                navigate(prevRef.slice(1), {replace: true})
            } else {
                navigate('/', {replace: true})
                // Добавляет юзера в БД
                update(ref(database, "Users"), {
                   [auth.currentUser.uid]: "" 
                })
                // Добавляет юзеру переменную isSubscribe
                set(ref(database, `Users/${auth.currentUser.uid}`), {
                    isSubscribe: false,
                    Favorite: ""
                })
                console.log(auth.currentUser.uid)
            }
        }
        // eslint-disable-next-line
    }, [currentUser])

    return <Registration />;
};

export default AuthPage;