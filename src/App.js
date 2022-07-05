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
          {apple.map((a, i)=>{
            return(
              <AppleProduct apple={apple[i]} i={i}/>
            )
          })}
        </div>
      </div>
    </div>
  );
}

function AppleProduct(props) {
  return (
    <div className='col'>
      <img src={'img/apple' + (props.i+1) + '.png'}/>
      <h3>{props.apple.title}</h3>
      <p>{props.apple.price}</p>
    </div>
  )
}

export default App;
