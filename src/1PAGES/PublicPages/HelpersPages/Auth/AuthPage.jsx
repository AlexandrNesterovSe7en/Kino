import { useSelector } from "react-redux";
import Registration from "../../../../2MODULES/Auth/Registration/Registration";
import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";

// Проверяет зарегестрирован ли пользователь
const AuthPage = () => {
    const currentUser = useSelector(state => state.currentUser.user);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if(currentUser) {
            navigate(-1)
        }
    }, [currentUser])

    return currentUser ? <Navigate to='..' replace={true}/> : <Registration />;
};

export default AuthPage;