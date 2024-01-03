import { Link } from 'react-router-dom';
import cl from './Error.module.css';

const ErrorPage = () => {
    return (
        <div className={cl.container}>
            <h2>404</h2>
            <p className={cl.p_notFound}>Page not found</p>
            <p className={cl.p_ErrorMessage}>Oops!, the page you looking for does not exist</p>
            <Link to='/' className={cl.Link}>
            <svg className={cl.svg} xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
                Back to home
            </Link>
        </div>
    );
};

export default ErrorPage;