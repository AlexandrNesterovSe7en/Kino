import cl from "./MainModal.module.css";



const MainModal = ({ text, className, onClickCallback }) => {    
    return (
        <div className={cl.modalBg + ' ' + className}>
            <div className={cl.modalWrapper} onClick={onClickCallback}>
                <svg xmlns="http://www.w3.org/2000/svg" className={cl.closeIcon} height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default MainModal;