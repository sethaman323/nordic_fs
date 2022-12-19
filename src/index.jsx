import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './main.css';
import Root from "./routes/root";


const router = createBrowserRRouter([
    {
        path: '/',
        element: <h1>Home Page</h1>,
    },
    {
        path: '/about',
        element: <h1>About Page</h1>,
    },
    {
        path: '/contact',
        element: <h1>Contact Page</h1>,
    },
]);


const container = document.getElementById('root');
const root = createRoot(container);

root.render(<RouterProvider router= {router} />);
