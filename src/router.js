import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route, } from "react-router-dom"
import App from "./App";
import Home from "./views/Home";
import About from "./views/About";
import Price from "./views/Price";
import Stocks1 from "./views/Stocks1";
import { priceLoader } from "./views/loader";



const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App/>}>
             <Route path='/' element={<Home/>}/>
                <Route path='about' element={<About/>}/>
                    <Route path='/stocks' element={<Stocks1/>} loader={priceLoader}/>
                    <Route path="/stocks/:symbol" element={<Price/>} loader={priceLoader}/>
        </Route>
    )
);

export default router;