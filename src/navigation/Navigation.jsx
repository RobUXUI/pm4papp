import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Logo from  '../assets/logotipo/logotipo.png';


const Navigation = () => {
  return (

     <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
    <Navbar.Brand href="/home"> <Image src={Logo}  fluid  width="100px"/></Navbar.Brand>
   
    </Container>
    <Container fluid>
    <Nav className="me-auto">

           <Nav.Link href="/home">HOME</Nav.Link>
            <Nav.Link href="/nosotros">NOSOTROS</Nav.Link>
            <Nav.Link href="/menu">MENU</Nav.Link>
            <Nav.Link href="/reservas">RESERVAS</Nav.Link>
      </Nav>
    </Container>
  </Navbar>


          //  <div class="navbar2">
          //   <NavLink to="/home">HOME</NavLink>
          //   <NavLink to="/nosotros">NOSOTROS</NavLink>
          //   <NavLink to="/menu">MENU</NavLink>
          //   <NavLink to="/reservas">RESERVAS</NavLink>
          //  </div>
  )
}

export default Navigation;