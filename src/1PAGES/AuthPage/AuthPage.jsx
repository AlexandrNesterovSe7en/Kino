import { Outlet } from "react-router";
import { useSelector } from "react-redux";

const AuthPage = () => {
    const currentUser = useSelector(state => state.currentUser);

    if(currentUser) {
        return <Outlet />;
    }

    return (
        <div>
            AuthPage
        </div>
    );
};

export default AuthPage;