import {useNavigate} from "react-router-dom";

import '../index.css';

/**
 * Login page of the application.
 *
 * @returns {JSX.Element}
 */
export const LoginPage = () => {
    const navigate = useNavigate();

    const loggedIn = () => {
        localStorage.setItem('isLoggedIn', '1');
        navigate('/profile');
    }

    return (
        <div className={'center-align'}>
            <h1>Welcome to the Login Page !!</h1>
            <button className={'btn'} onClick={loggedIn}>Login</button>
        </div>
    );
}
