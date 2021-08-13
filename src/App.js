/* eslint-disable */

import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';
import axios from 'axios';
import Cart from './Cart.js';



function App() {

  let [shoes, shoesChange] = useState(Data);
  let [Info, InfoChange] = useState([10, 11, 12]);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Muscle Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to="/"> Home </Nav.Link>
              <Nav.Link as = {Link} to="/detail/"> Detail </Nav.Link>
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

      <Switch>
        <Route exact path="/">
          <div>
            <div className="jumbotron">
              <h1>런닝화 50% SALE!</h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to geatured content or information.
              </p>
              <p>
                <Button variant="primary">Learn more</Button>
              </p>
              <div className="container">
                <div className="row">
                  { // { } 안에는 map 함수
                    shoes.map( (a, i) => { // state.map(()=>{return})
                      // (a, i) a shoes 안에 하나하나 데이터, i는 반복문 돌 때마다의 정수
                      return (
                        <Card shoes={shoes[i]} i={i} />
                      )
                    })
                  }
                </div>

                <button className="btn btn-primary" onClick={() => {


                  axios.post('서버URL', { id : 'black', pw : '1234'}).then()


                  // 로딩 중이라는 UI 띄움

                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=>{ // 성공하면 로딩 중이라는 UI 지움
                    console.log(result.data)
                    shoesChange([...shoes, ...result.data]);
                  })
                  .catch(()=>{ // 실패하면
                    console.log("실패했어요")
                  })
                }}>더보기</button>

              </div>
            </div>
          </div>
        </Route>

        <Route path="/detail/:id">
          <Detail shoes={shoes} Info = {Info} InfoChange = {InfoChange} />
        </Route>

        <Route path="/cart"> 
          <Cart />
        </Route>

        <Route path="/:id">
          <div>해결</div>
        </Route>
      </Switch>
      
    </div>
  );
}
// component 하나 더 추가해서 
function Card(props){ // 상위 컴포넌트에 있는 걸 가지고 와야 하니, props로 가지고 오기
  return (
      <div className="col-md-4">
        {/* img에 데이터 바인딩 하려면 src={}로 묶어주기 */}
        <img src={ "https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width="100%" />
        <h4>{props.shoes.title}</h4>
        <p>{props.shoes.content} & {props.shoes.price} </p>
      </div>

      
  )
}
export default App;
