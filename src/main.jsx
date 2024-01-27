import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import HowItWorks from './HowItWorks.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: '/how-it-works',
    element: <HowItWorks />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
