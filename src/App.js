import React from "react";
import "./App.css";

import "./App.css";
import Nav from "./Navigation/Nav.js";

//import Navbar from './Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "../src/pages/About";
import ToggleMode from "./Components/ToggleMode";
import Game from "./Game";

function App() {
    return (
        <>
            <Router>
                <Nav />
                <Routes>
                    <Route path="/" element={<Game />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/toggle" element={<ToggleMode />} />
                </Routes>
            </Router>
        </>
    );
}

export default App;
