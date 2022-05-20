import React, { Component } from "react";
import "./App.css";
import Hangman from "./Hangman/Hangman";
import Nav from "./Navigation/Nav.js";
import "./index.css";


//import Navbar from './Navigation/Navbar'; 
import { BrowserRouter as Router, Routes, Route} 

    from 'react-router-dom'; 

import About from './pages/About'; 
import ToggleMode from "./Components /ToggleMode";

class App extends Component {
  render() {
    return (
      <>
        <Router> 
          <Nav /> 
            <Routes> 
              <Route path='/hangman' element={<Hangman/>} /> 
              <Route path='/about' element={<About/>} /> 
              <Route path='/toggle' element={<ToggleMode/>} /> 
              
            </Routes> 
          </Router> 
      </>
    );
  }
}

export default App;
