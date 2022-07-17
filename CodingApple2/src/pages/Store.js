// 라이브러리
import React from 'react'
import {useState} from 'react'
import axios from 'axios';
// 컴포넌트
import products from '../products';



function Store() {
    let [apple, setApple] = useState(products);

    return (
        <div>
            <div className='home-bg'/>

            <div className='container'>
            <div className='row'>
                {apple.map((a, i)=>{
                return(
                    <AppleProduct apple={apple[i]} i={i}/>
                )
                })}
            </div>
            <button onClick={()=>{
                axios.get('https://codingapple1.github.io/shop/data2.json')
                .then((data)=>{
                    // console.log(data.data);
                    let copy = [...apple, ...data.data];
                    setApple(copy);
                })
            }}> 상품 더 보기 </button>
            </div>
        </div>
  )
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

export default Store