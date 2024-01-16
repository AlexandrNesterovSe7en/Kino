import { Link } from "react-router-dom";
import cl from "./SeparateCategoryButton.module.css";


// Ссылка на категорию находящаяся на главной странице
const SeparateCategoryButton = ({ category, className, movieMargin }) => {
    return ( 
        <Link to={category === "Рекомендуем" ? `${category}` : `Categories/${category}`} className={cl.categoryLink + " " + className} style={{marginLeft: movieMargin || movieMargin < 0 ? `${movieMargin + 1640}px` : "0"}}>
            <h2>{category}</h2>
            <svg fill="white" width="18px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z"/></svg>
        </Link>
     );
}
 
export default SeparateCategoryButton;