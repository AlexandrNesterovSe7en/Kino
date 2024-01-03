import { useParams } from "react-router-dom";

const CategoryPage = () => {
    const param = useParams();
    
    console.log(param.category)
    return (
        <div>
            Category
        </div>
    );
};



export default CategoryPage;