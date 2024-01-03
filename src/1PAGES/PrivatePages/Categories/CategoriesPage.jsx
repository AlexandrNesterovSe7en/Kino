import { Outlet } from "react-router-dom";

const CategoriesPage = () => {
    const c = 'Categories'

    return (
        <div>
            {
                true ?
                    <Outlet />
                    :
                    <div>{c}</div>
            }
        </div>
    );
};

export default CategoriesPage;