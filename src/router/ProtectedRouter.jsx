import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

/**
 * Protected routes
 *
 * @returns {JSX.Element}
 */
export const ProtectedRouter = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
        const loginStatus = parseInt(localStorage.getItem('isLoggedIn'));
        if (loginStatus === 0)
            navigate('/login');
    });

    return props.children;
}
