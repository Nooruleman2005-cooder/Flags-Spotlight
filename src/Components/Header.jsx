import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import logo from "../img/image.png"
import '../Styling/style.css';
import Searchbar from './Searchbar';


const Header = () => {
  return (
    <>
      <Navbar fixed="top" expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              style={{ width: '40px', height: '40px', marginRight: '10px' }}
            />
            <span style={{ color: 'white', fontWeight: 'bold' }}>Flags Spotlight</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Searchbar />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header