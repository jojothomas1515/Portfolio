import React from 'react';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";

function App(props) {
    return (
        <div className={"md:px-5 md:pt-5  p-2 mainApp"}>
            <Navbar/>

            <Routes>
                <Route path={"/*"} element={<Home/>}/>
            </Routes>


        </div>
    );
}

export default App;
