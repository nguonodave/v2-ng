import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const router = createBrowserRouter(
    createRoutesFromElements(<Route index element={ <h1>My App</h1> } />)
)

export default function App() {
    return (
        // <>
        //     <Navbar />
        //     <Home />
        // </>

        <RouterProvider router={router} />
    );
}
