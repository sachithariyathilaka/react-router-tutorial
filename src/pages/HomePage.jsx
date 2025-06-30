import {useNavigate} from "react-router-dom";

import '../index.css';

/**
 * Home page of the application.
 *
 * @returns {JSX.Element}
 */
export const HomePage = () => {
    const navigate = useNavigate();

    return (
        <div className={'center-align'}>
            <h1>Welcome to the Home Page !!</h1>
            <button className={'btn'} onClick={() => navigate('/navigation')}>Navigate Me</button>
        </div>
    );
}
