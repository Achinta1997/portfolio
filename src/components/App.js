
import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";


import Header from "./templetes/Header";
import Footer from "./templetes/footer";
import Home from "./pages/Home";
import About from "./pages/About"

const router= createBrowserRouter([
    {
        path:"/",
        element:(<Home/>)

    },
    {
        path:"/about",
        element:(<About/>)
    }
])

function App(){

    return(
        <>
        {<RouterProvider router={router}/>}
       
        </>
        
    )
}

export default App;