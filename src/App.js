import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Projects from "./pages/Projects";

function App(props) {
    return (
        <div className={"md:px-5 md:pt-5  p-2"}>
            <Navbar/>

            <Routes>
                <Route path={"/*"} element={<Home/>}/>
                <Route path={"project"} element={<Projects/>}/>
            </Routes>


        </div>
    );
}

export default App;
