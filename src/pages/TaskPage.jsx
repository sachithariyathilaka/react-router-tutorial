import {Link, Outlet} from "react-router-dom";

import '../index.css';

/**
 * Task page of the application.
 *
 * @returns {JSX.Element}
 */
export const TaskPage = () => {
    return (
        <>
            <div className={'center-align'}>
                <h1>Welcome to the Task Page !!</h1>
            </div>
            <nav className={'nav-bar'}>
                <Link to='/tasks/orders'>Orders</Link>
                <Link to='/tasks/products'>Products</Link>
            </nav>
            <Outlet/>
        </>
    );
}
