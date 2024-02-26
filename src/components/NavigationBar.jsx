import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function Home() {
  return (
    <div>
       <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand className="text-orange-500" href="#">Car</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Service</Nav.Link>

            <Nav.Link href="#" disabled>
              Contact
            </Nav.Link>
          </Nav>
        
    
            <Button style={{backgroundColor:'#FFA500'}}>Schedule Service Now.</Button>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
