// 라이브러리
import React from 'react'
import {useState} from 'react'
// 컴포넌트
import products from '../products';

function Store() {
    let [apple] = useState(products);

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