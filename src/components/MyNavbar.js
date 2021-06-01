import React from 'react'
import { useState } from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
const MyNavbar = () => {

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" style={{ dispaly: 'flex', justifyContent: 'flex-end' }}>
                <Nav className="me-auto">
                <Nav.Link href="#features">About</Nav.Link>
                <Nav.Link href="#pricing">Login/Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default MyNavbar

