import cl from './SignInUser.module.css';
import { useState } from 'react';
import MainButton from '../../../4UI/Buttons/MainButton/MainButton';
import MainInput from '../../../4UI/Input/MainInput/MainInput';
import { auth } from '../../../FireBase/FireBase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';

const SignInUser = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    // функция, регистрирующая пользователя на firebase
    function handleLogin(e) {
        // отключаем поведение по умолчанию, что бы тэг form не отправлял запросы
        e.preventDefault()

        // Вход пользователя
        signInWithEmailAndPassword(auth, email, password).catch((err) => {
            alert(err);
        })
    }

    return (
        <form onSubmit={handleLogin} action='' className={cl.container_Registration}>
            <h2 className={cl.h2_Registration__Header}>
                Вход
            </h2>
            <MainInput onChange={(e) => setEmail(e.target.value)} type='text' placeholder='Email' className={cl.signInInput}/>
            <MainInput onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' className={cl.signInInput}/>
            <MainButton onClick={handleLogin} className={cl.signInButton}>Войти</MainButton>
            <p className={cl.p_Registration__Alternate_Join}>Нет аккаунта? <Link to='/signUp'>Зарегестрируйтесь!</Link></p>
        </form>
    )
};

export default SignInUser;