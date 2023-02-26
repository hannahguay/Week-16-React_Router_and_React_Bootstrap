import React from 'react'

//components
import Container from 'react-bootstrap/esm/Container'
import Navbar from 'react-bootstrap/Navbar'

const Footer = () => {
  return (
    <div>
    <Navbar bg="dark" variant="dark" fixed="bottom" >
      <Container >
        <Navbar.Brand href="#home">Todo List Tracker</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Created By: <a href="#login">Hannah Guay</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Footer