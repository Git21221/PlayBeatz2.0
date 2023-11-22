import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Home, Search, Library, Playlist, Likedsongs, Card } from './components/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/library',
        element: <Library />
      },
      {
        path: '/Play-list',
        element: <Playlist />
      },
      {
        path: '/liked-songs',
        element: <Likedsongs />
      },
      {
        path: '/:userid',
        element: <Card />,
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
