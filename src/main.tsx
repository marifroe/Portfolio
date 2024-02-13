import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProjectDetails } from './pages/ProjectDetails/ProjectDetails.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import "@fontsource/abril-fatface"
import NotFoundPage from './pages/NotFoundPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/projects/:projectId',
    element: <ProjectDetails />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/*<App />*/}
  </React.StrictMode>,
)
