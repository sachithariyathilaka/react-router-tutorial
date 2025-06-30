import {useNavigate} from "react-router-dom";

import '../index.css';

/**
 * Profile page of the application.
 *
 * @returns {JSX.Element}
 */
export const ProfilePage = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.setItem('isLoggedIn', '0');
        navigate('/login');
    }

    return (
        <div className={'center-align'}>
            <h1>Welcome to the Profile Page !!</h1>
            <button className={'btn'} onClick={logout}>Log Out</button>
        </div>
    );
}
