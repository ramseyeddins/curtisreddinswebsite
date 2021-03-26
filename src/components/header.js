import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'


const header = () => {
    return (
        <Navbar collapseOnSelect bg="dark" variant="dark" expand="md">
        <LinkContainer to="/me">
            <Navbar.Brand className="Brand">CURTIS RAMSEY EDDINS</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="Header">
            <LinkContainer to="/about">
                <Nav.Link className="Link-Border" eventKey="1">ABOUT</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/resume">
                <Nav.Link className="Link-Border" eventKey="2">RESUME</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contact">
                <Nav.Link className="Link-Border" eventKey="3">CONTACT</Nav.Link>
            </LinkContainer>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
    )
}

export default header