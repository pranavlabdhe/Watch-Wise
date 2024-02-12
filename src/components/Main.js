import React from 'react'
import Login from './Login'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const Main = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:"/browse",
            element:<Browse />
        }
    ])
    return (
    <>
    <RouterProvider router={appRouter}></RouterProvider>
    </>
    
    
  )
}

export default Main