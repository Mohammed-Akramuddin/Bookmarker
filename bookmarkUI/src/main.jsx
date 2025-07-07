import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,createBrowserRouter,createRoutesFromElements,RouterProvider,BrowserRouter } from 'react-router-dom' // ✅ Import router

import App from './App.jsx'
import AddBookmark from "./AddBookmark.jsx";
const router=createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}/>
            <Route path="/add" element={<AddBookmark/>}/>
        </>
    )
)
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
)