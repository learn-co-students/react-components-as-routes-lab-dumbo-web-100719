import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink 
        to="/" 
        exact 
        style={{background: 'darkblue'}}
        >Home
      </NavLink>

      <NavLink 
        to="/movies"  
        style={{background: 'darkblue'}}
        >Movies
      </NavLink>

      <NavLink 
        to="/directors"  
        style={{background: 'darkblue'}}
        >Directors
      </NavLink>

      <NavLink 
        to="/actors"  
        style={{background: 'darkblue'}}
        >Actors
      </NavLink>
      
    </div>
  );
};

export default NavBar;
