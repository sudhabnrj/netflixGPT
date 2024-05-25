import React from 'react'
import Login from './Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Movie from './Movie';
import AllMovie from './AllMovie';
import AllTvShows from './AllTvShows';
import TvShow from './TvShow';


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
            path: '/movie/:movieID',
            element: <Movie/>
        },
        {
            path: '/movie',
            element: <AllMovie/>
        },
        {
            path: '/tv',
            element: <AllTvShows/>
        },
        {
            path: '/tv/:tvSeriesID',
            element: <TvShow/>
        }
    ]);
    return (
        <>
            <RouterProvider router={appRouter}/>
        </>
    )
}

export default Body
