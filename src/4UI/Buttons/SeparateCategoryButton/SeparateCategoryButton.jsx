import { Link } from "react-router-dom";
import cl from "./SeparateCategoryButton.module.css";



const SeparateCategoryButton = ({ category, path }) => {
    return ( 
        <Link to={path} className={cl.categoryLink}>
            <h2>{category}</h2>
        </Link>
     );
}
 
export default SeparateCategoryButton;