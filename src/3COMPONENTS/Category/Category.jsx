
import { Link } from "react-router-dom";
import cl from "./Category.module.css";
import 'react-loading-skeleton/dist/skeleton.css'


const Category = ({ title, path }) => {

    return (
        <>
            <div>
                <Link to={path} className={cl.categoryLink}>
                    <div className={cl.titleWrapper}>
                        <h2>{title}</h2>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default Category;