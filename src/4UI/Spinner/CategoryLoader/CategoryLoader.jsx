
import cl from "./CategoryLoader.module.css";

const CategoryLoader = () => {
    return (
        <div>
            <span className={cl.loader}></span>
        </div>
    );
};

export default CategoryLoader;