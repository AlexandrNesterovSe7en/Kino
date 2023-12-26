import { Outlet } from "react-router";
import { useSelector } from "react-redux";
import Registration from "../../2MODULES/Auth/Registration/Registration";

const AuthPage = () => {
    const currentUser = useSelector(state => state.currentUser);

    if (currentUser) {
        return <Outlet />;
    }

    return (
        <Registration />
    );
};

export default AuthPage;