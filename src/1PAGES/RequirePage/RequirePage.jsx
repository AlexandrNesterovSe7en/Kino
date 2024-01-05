import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

const RequirePage = () => {
    const user = useSelector(state => state.currentUser.user);
    const navigate = useNavigate();

    useLayoutEffect(() => {
        if(!user){
            navigate('/signIn', {replace: true})
        }
    }, [user, navigate])

    return <Outlet />
};

export default RequirePage;