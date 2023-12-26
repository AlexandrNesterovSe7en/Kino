
import cl from "./MainButton.module.css";

const MainButton = ({ text }) => {
    return ( 
        <div>
            <button className={cl.mainButton}>{text}</button>
        </div>
     );
}
 
export default MainButton;