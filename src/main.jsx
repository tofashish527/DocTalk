import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router";
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>
    <RouterProvider router={router}/>
    </Suspense>
    <ToastContainer position="top-right" autoClose={1000} hideProgressBar />
  </StrictMode>,
)
