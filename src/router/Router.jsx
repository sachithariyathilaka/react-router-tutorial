import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import {HomePage} from "../pages/HomePage";
import {AboutPage} from "../pages/AboutPage";
import {ContactPage} from "../pages/ContactPage";
import {NotFoundPage} from "../pages/NotFoundPage";
import {UsersPage} from "../pages/UsersPage";
import {TaskPage} from "../pages/TaskPage";
import {OrderPage} from "../pages/OrderPage";
import {ProductPage} from "../pages/ProductPage";
import {NavigationPage} from "../pages/NavigationPage";
import {ProtectedRouter} from "./ProtectedRouter";
import {ProfilePage} from "../pages/ProfilePage";
import {LoginPage} from "../pages/LoginPage";

/**
 * Browser routes
 *
 * @returns {JSX.Element}
 */
export const routes = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'about',
                element: <AboutPage />
            },
            {
                path: 'contact',
                element: <ContactPage />
            },
            {
                path: 'users/:user',
                element: <UsersPage />
            },
            {
                path: 'tasks',
                element: <TaskPage />,
                children: [
                    {
                        path: 'orders',
                        element: <OrderPage />
                    },
                    {
                        path: 'products',
                        element: <ProductPage />
                    }
                ]
            },
            {
              path: 'navigation',
              element: <NavigationPage/>
            },
            {
                path: 'login',
                element: <LoginPage/>
            },
            {
                path: 'profile',
                element: <ProtectedRouter>
                            <ProfilePage/>
                         </ProtectedRouter>
            },
            {
                path: '*',
                element: <NotFoundPage />
            }
        ]
    }
]

export const router = createBrowserRouter(routes);
