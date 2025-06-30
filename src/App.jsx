import {Link, Outlet} from "react-router-dom";

import './index.css';

/**
 * Main method of the application.
 *
 * @returns {JSX.Element}
 */
const App = () => {
  return (
      <>
          <nav className={'nav-bar'}>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/contact'>Contact</Link>
              <Link to='/users/Not Available'>Users</Link>
              <Link to='/tasks'>Tasks</Link>
              <Link to='/profile'>Profile</Link>
          </nav>
          <Outlet/>
      </>
  );
}

export default App;
