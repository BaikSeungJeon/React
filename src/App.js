/* eslint-disable */
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import './App.css';
import Data from './data.js';

function App() {

  let [shoes, shoesChange] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Muscle Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<div className="jumbotron">
    <h1>런닝화 50% SALE!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to geatured content or information.
    </p>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
    
</div>

<div className="container">
  <div className="row">
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </div>
</div>
    </div>
  );
}

function Col(){
  return (
    <>
      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
        <h4>{shoes[0].title}</h4>
        <p>{shoes[0].content}</p>
      </div>

      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
        <h4>{shoes[1].title}</h4>
        <p>{shoes[1].content}</p>
      </div>

      <div className="col-md-4">
        <img src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
        <h4>{shoes[2].title}</h4>
        <p>{shoes[2].content}</p>
      </div>
    </>
  )
}
export default App;
