import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import Error from './components/Error';

/*
Header - logo, navitem,
body - search, 
        restaurant container - restro card
footer - copyright, privacy, links, address

//main is top level coomponet- 
*/

const App = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element:<App />,
        errorElement: <Error />,
    },
     {
        path: '/about',
        element:<AboutUs />,
     },
      {
        path: '/contact',
        element:<ContactUs />,
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);