
import cl from "./MainInput.module.css"


const MainInput = ({className, ...props}) => {
    return (
        <input {...props} className={cl.mainInput + ' ' + className} />
    );
}

export default MainInput;