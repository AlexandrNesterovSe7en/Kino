import { Outlet, useParams } from "react-router-dom";
import RenderCategoriesCards from "../../../2MODULES/RenderCategoriesCards/RenderCategoriesCards";
import cl from "./CategoriesPage.module.css";


const CategoriesPage = () => {
    const param = useParams();

    return (
        <div className={cl.wrapper}>
            {
                param.category ?
                    <Outlet />
                    :
                    <RenderCategoriesCards />
            }
        </div>
    );

};

export default CategoriesPage;