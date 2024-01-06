import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import SignInUser from '../../../../2MODULES/Auth/SignInUser/SignInUser'


// Страница входа
const SignInPage = () => {
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
            }
        }
        // eslint-disable-next-line
    }, [currentUser])

    return <SignInUser/>
};

export default SignInPage;