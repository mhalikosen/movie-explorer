import { Navigate, useRoutes } from 'react-router-dom'

import MainLayout from '../layouts/MainLayout'

import Home from '../pages/Home'
import MovieDetail from '../pages/MovieDetail'

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },
        {
          path: '/detay/:imdbID',
          element: <MovieDetail />
        }
      ]
    },
    { path: '*', element: <Navigate to="/" replace /> }
  ])
}

export default Router
