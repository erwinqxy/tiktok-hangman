import React from "react"; 
import ToggleMode from "../Components/ToggleMode";
import { Nav, NavLink, NavMenu } from "./NavbarElements"; 
import { GiBullyMinion } from "react-icons/gi";


  
const Navbar = () => { 

  return ( 

    <> 

      <Nav> 
          
        <NavMenu> 
        <GiBullyMinion />
          <NavLink to="/" activeStyle> 

            Hangman 

          </NavLink> 

          <NavLink to="/leaderboard" activeStyle> 

            Leaderboard 

        </NavLink> 

          <NavLink to="/about" activeStyle> 

            About us

          </NavLink> 



          <ToggleMode />

        </NavMenu> 

      </Nav> 

    </> 

  ); 
}; 

  

export default Navbar; 