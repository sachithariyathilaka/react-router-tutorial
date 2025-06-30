import {useParams} from "react-router-dom";

import '../index.css';

/**
 * Users page of the application.
 *
 * @returns {JSX.Element}
 */
export const UsersPage = () => {
    const {user} = useParams();

    return (
        <div className={'center-align'}>
            <h1>Welcome {user} !!</h1>
        </div>
    );
}
