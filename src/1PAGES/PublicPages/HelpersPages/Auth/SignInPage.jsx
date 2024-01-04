import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import SignInUser from '../../../../2MODULES/Auth/SignInUser/SignInUser'


// Страница входа
const SignInPage = () => {
    const currentUser = useSelector(state => state.currentUser.user);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if(currentUser) {
            navigate(-1)
        }
    }, [currentUser])

    return <SignInUser/>
};

export default SignInPage;