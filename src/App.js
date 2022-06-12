import logo from './logo.svg';
import './App.css';
import { Nav, Container, Row, Col } from 'react-bootstrap'

function App() {
  return (
    <div className="App">
      <Nav className='nav' variant="pills" defaultActiveKey="/iPhone">
        <Nav.Item>
          <Nav.Link href="/iPhone">iPhone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">iPad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Macbook</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className='home-bg'/>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='img/iphone.png'/>
            <h3>iPhone 13 Pro Max</h3>
          </div>
          <div className='col'>
            <img src='img/ipad.png'/>
            <h3>iPad Air 5</h3>
          </div>
          <div className='col'>
            <img src='img/macbook.png'/>
            <h3>Macbook PRO 14</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
