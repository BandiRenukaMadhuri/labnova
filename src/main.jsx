import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Ensure you're using React 18 or above
import './index.css'; // Import your CSS file
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Contact from './components/contact.jsx';

 const AppRouter = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path: "/contact",
    element: <Contact/>
  }, {
    path: "/contact",
    element: <Contact/>
  }
 ]);



createRoot(document.getElementById('root')).render(
  <RouterProvider router={AppRouter} />
);
