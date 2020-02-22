import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Welcome extends Component {
    render() {
        return (
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">JW</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            <Nav.Link href="#skills">Skills</Nav.Link>
                            <Nav.Link href="#education">Education</Nav.Link>
                            <Nav.Link href="#awards">Awards</Nav.Link>
                            <Nav.Link href="#experience">Experience</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
                <Jumbotron className='text-center'>
                    <h3>Welcome</h3>
                    <h1>John Wondoh, PhD</h1>
                    <h2>Computer Scientist & Developer</h2>
                </Jumbotron>
            </div>
        );
    }
}

export default Welcome;