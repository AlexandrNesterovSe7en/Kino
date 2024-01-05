import Category from "../../3COMPONENTS/Category/Category";
import { TRANSLATOR_EN_TO_RU } from "../../CONSTANTS/CONSTANTS";
import cl from "./RenderCategories.module.css";


const RenderCategories = ({ data }) => {
    return (
        <div className={cl.listCategories}>
            {
                data.map(category => {
                    return <Category key={category} title={TRANSLATOR_EN_TO_RU[category]} path={TRANSLATOR_EN_TO_RU[category]} />;
                })
            }
        </div>
    );
};

export default RenderCategories;