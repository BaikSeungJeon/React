import { Nav, Container, Row, Col } from 'react-bootstrap'
import {useState} from 'react'
import './App.css';
import products from './products';


function App() {

  let [apple] = useState(products);

  return (
    <div className="App">
      <Nav className='nav' variant="pills" defaultActiveKey="/iPhone">
        <Nav.Item>
          <Nav.Link href="/iPhone">iPhone</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" href="/iPad">iPad</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" href="/Macbook">Macbook</Nav.Link>
        </Nav.Item>
      </Nav>

      <div className='home-bg'/>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <img src='img/iphone.png'/>
            <h3>{apple[0].title}</h3>
            <p>{apple[0].price}</p>
          </div>
          <div className='col'>
            <img src='img/ipad.png'/>
            <h3>{apple[1].title}</h3>
            <p>{apple[1].price}</p>
          </div>
          <div className='col'>
            <img src='img/macbook.png'/>
            <h3>{apple[2].title}</h3>
            <p>{apple[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
