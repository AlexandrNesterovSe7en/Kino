import cl from "./MainSpinner.module.css";

const MainSpinner = ({ className }) => {
    return ( 
        <div className={cl.spinnerWrapper}>
            <span className={cl.loader + ' ' + className}></span>
            <span className={cl.loader1 + ' ' + className}></span>
            <span className={cl.loader2 + ' ' + className}></span>
            <span className={cl.loader3}><div></div><div></div><div></div><div></div></span>
        </div>
     );
}
 
export default MainSpinner;

