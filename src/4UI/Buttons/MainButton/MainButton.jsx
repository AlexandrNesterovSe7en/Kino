import cl from "./MainButton.module.css";

const MainButton = ({ children, className, ...props}) => {
    
    return (
        <button {...props} className={cl.mainButton + ' ' + className}> {children} </button>
    );
}

export default MainButton;