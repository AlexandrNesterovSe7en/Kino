import MainButton from '../../../4UI/Buttons/MainButton/MainButton';
import MainInput from '../../../4UI/Input/MainInput/MainInput';
import cl from './Registation.module.css';

const Registration = () => {

    return (
        <div className={cl.container_Registration}>
            <h2 className={cl.h2_Registration__Header}>
                Регистрация 
            </h2>
            <MainInput type='text' placeholder='Login'/>
            <MainInput type='password' placeholder='Password'/>
            <MainButton>Зарегистрироваться</MainButton>
            <p className={cl.p_Registration__Alternate_Join}>Или выполните <a rel='noopener noreferrer'>вход!</a></p>
        </div>
    );
};

export default Registration;