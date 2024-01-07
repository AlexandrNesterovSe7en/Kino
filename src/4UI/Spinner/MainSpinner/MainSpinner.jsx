import cl from "./MainSpinner.module.css";

const MainSpinner = ({ className }) => {
    return ( 
        <div className={cl.spinnerWrapper + ' ' + className}>
            <span className={cl.loader3}><div></div><div></div><div></div><div></div></span>
        </div>
     );
}
 
export default MainSpinner;

