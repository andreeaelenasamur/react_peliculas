import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Home from './pages/home/Home';
import MovieDetails from './pages/movie/MovieDetails';
import MovieList from './pages/movie/MovieList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '',
        element: <MovieList />
      },
      {
        path: 'movie/:id',
        element: <MovieDetails />
      }
    ]
  }
]);

export default router;