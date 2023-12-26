
import cl from "./MainInput.module.css"


const MainInput = ({ placeholder }) => {
    return ( 
        <div>
            <input type="text" placeholder={placeholder} className={cl.mainInput}/>
        </div>
     );
}
 
export default MainInput;