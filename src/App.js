import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
// import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { createBrowserRouter , Outlet, RouterProvider} from 'react-router-dom';
import Error from './components/Error';
import ResturantMenu from './components/ResturantMenu';
import Shimmer from './components/Shimmer';

/*
Header - logo, navitem,
body - search, 
        restaurant container - restro card
footer - copyright, privacy, links, address

//main is top level coomponet- 
*/
const AboutUs = lazy(() => import('./components/AboutUs') );
const App = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <Suspense fallback={<Shimmer />}>
                     <h2>Preview</h2>
                    <AboutUs />
                </Suspense>,
            },
            {
                path: '/contact',
                element: <ContactUs />,
            },
            {
                path: '/restaurants/:resId',
                element: <ResturantMenu />,
            }
        ],
        errorElement: <Error />,
    },
     
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);