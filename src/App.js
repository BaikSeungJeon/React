/* eslint-disable*/

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // var [a, b] = [10, 100]; a = 10, b = 100

  let [글제목, 글제목변경] = useState(['강남 맛집', '홍대 맛집', '이태원 맛집']);
  // [사용 프레임워크 , state 정정해주는 함수]
  let [따봉, 업] = useState(0);
  // let [modal, modal변경] = useState(false);
  let [modal, modal열기] = useState(false);




  // let post = '첫 포스팅';


  // state 복사본 만들어서 배열 [0] 수정하기
  function 변경함수(){ 
    // let newArray = 글제목; // 이건 값 공유지 복사가 아니라 안됨
    let newArray = [...글제목]; // deep copy : 값 공유가 아닌, 서로 독립적인 값을 가지는 복사
    newArray[0] = '강남 숨은 맛집';
    글제목변경( newArray ); // state를 아에 대체해주는 함수
  }

// 버튼을 누르면 제목들을 오름차순으로 정렬하기
  function 정렬함수(){
  // 1. state 카피본 만들고,
  let sndArray = [...글제목];

  // 2. 카피본에 수정 사항 반영하고
  sndArray = ['강남 맛집', '이태원 맛집', '홍대 맛집' ];

  // 3. 변경함수()에 집어넣기 ( 꼭 외우기 )
  글제목변경( sndArray);
  }

  return (
    <div className="App">
      <div className="navBar">
        <div style={{color : 'skyblue', fontSize : '30px'}}>React 공부 기록 Blog</div>
      </div>

      <button onClick={ 변경함수 }> 변경 </button>
      <button onClick={ 정렬함수 }> 정렬 </button>
      <div className="list">
        <h3> { 글제목[0] } <span onClick={ () => { 업(따봉 + 1) } }>👍</span> { 따봉 } </h3>
        <p> 2021년 8월 2일 작성 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[1] } </h3>
        <p> 2021년 8월 3일 작성 </p>
        <hr/>
      </div>
      <div className="list">
        <h3> { 글제목[2] } </h3>
        <p> 2021년 8월 4일 작성 </p>
        <hr/>
      </div>
      <button onClick={ () => { modal열기(!modal) } }> modal </button>

      {/* {
        modal === true
        ? <Modal/>
        : null
      } */}
      
      {
        modal === true
        ? <Modal/>
        : null
      }




    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>내용</p>

      </div>
  )
}

export default App;
