import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Menubar = ({ item }) => {
    return (
        <Navbar fixed="top" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">FakeStore</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#cart">Cart <sup className='text-danger fw-bold'>{item}</sup></Nav.Link>
                        <Nav.Link href="#contact">Contact us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}



export default Menubar;