import MainButton from '../../../4UI/Buttons/MainButton/MainButton';
import MainInput from '../../../4UI/Input/MainInput/MainInput';
import cl from './Registation.module.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../FireBase/FireBase';
import { Link } from 'react-router-dom';

const Registration = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    // функция, регистрирующая пользователя на firebase
    function handleSignUp(e) {
        e.preventDefault()

        createUserWithEmailAndPassword(auth, email, password).catch((err) => { alert(err); })
    }

    return (
        <form onSubmit={handleSignUp} className={cl.container_Registration}>
            <h2 className={cl.h2_Registration__Header}>
                Регистрация
            </h2>
            <MainInput onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' />
            <MainInput onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />
            <MainButton onClick={handleSignUp}>Зарегистрироваться</MainButton>
            <p className={cl.p_Registration__Alternate_Join}>Или выполните <Link to='/signIn'>вход!</Link></p>
        </form>
    );
};

export default Registration;