import { Outlet, useParams } from "react-router-dom";
import RenderCategoriesCards from "../../../2MODULES/RenderCategoriesCards/RenderCategoriesCards";

const CategoriesPage = () => {
    const param = useParams();

    return (
        <>
            {
                param.category ?
                    <Outlet />
                    :
                    <RenderCategoriesCards />
            }
        </>
    );

};

export default CategoriesPage;