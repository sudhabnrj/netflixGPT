import React from 'react'
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Movie from './Movie';


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        },
        {
            path: '/watch/:movieID',
            element: <Movie/>
        }
    ]);
    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    )
}

export default Body
