import { useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useHref, useNavigate } from "react-router-dom";

const RequirePage = () => {
    const user = useSelector(state => state.currentUser.user);
    const navigate = useNavigate();
    const ref = useHref();

    useLayoutEffect(() => {
        if(!user){
            navigate('/signIn', {replace: true, state: ref})
        }
        // eslint-disable-next-line
    }, [user])

    return user ? <Outlet /> : null;
};

export default RequirePage;