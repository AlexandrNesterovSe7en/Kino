import { Outlet, useSearchParams } from "react-router-dom";

const CategoriesPage = () => {
    const c = 'Categories'
    const [searchParams, setsearchParams] = useSearchParams();

    console.log(searchParams, setsearchParams)

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