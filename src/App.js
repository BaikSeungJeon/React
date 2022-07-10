// 라이브러리
import { Nav, Container, Row, Col } from 'react-bootstrap'
import {Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios';
// css
import './App.css';
// 컴포넌트
import Store from './pages/Store';
import Detail from './pages/Detail';
import Contact from './pages/Contact';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <Nav className='nav' variant="pills">
        <Nav.Item><Nav.Link onClick={()=>{navigate('/')}}>Store</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link onClick={()=>{navigate('/contact')}}>Contact</Nav.Link></Nav.Item>
      </Nav>

      <Routes>
        <Route path="/" element={<Store/>}/>
        <Route path="/detail" element={<Detail/>}/>
        <Route path="/contact" element={<Contact/>}/>

        <Route path="/*" element={<>없는 페이지입니다.</>}/>

        <Route path="/mypage" element={<>마이페이지 <Outlet/></>}>
          <Route path="profile" element={<>프로필 정보</>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
