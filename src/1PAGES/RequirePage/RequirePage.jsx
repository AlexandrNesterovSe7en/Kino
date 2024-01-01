import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const RequirePage = () => {
    const user = useSelector(state => state.currentUser.user);

    return (
        <>
            {
                user ?
                    <Outlet />
                    :
                    <Navigate to='/signUp' />
            }
        </>
    );
};

export default RequirePage;