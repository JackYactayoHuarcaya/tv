import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import {RouterProvider} from 'react-router-dom'
import router from './route'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
