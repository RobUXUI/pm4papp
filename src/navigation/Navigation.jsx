import React from 'react'
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
           <div>
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/nosotros">NOSOTROS</NavLink>
            <NavLink to="/menu">MENU</NavLink>
            <NavLink to="/reservas">RESERVAS</NavLink>
           </div>
  )
}

export default Navigation;