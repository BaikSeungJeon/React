// 라이브러리
import { Nav, Container, Row, Col } from 'react-bootstrap'
import {Routes, Route, Link} from 'react-router-dom'
import {useState} from 'react'
// css
import './App.css';
// 컴포넌트
import Store from './pages/Store';
import Contact from './pages/Detail';



function App() {

  return (
    <div className="App">
      <Nav className='nav' variant="pills">
        <Nav.Item><Nav.Link href="/">Store</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link eventKey="link-1" href="/contact">Contact</Nav.Link></Nav.Item>
      </Nav>

      <Routes>
        <Route path="/" element={<Store/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
