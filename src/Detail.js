/* eslint-disable*/

import React, {useEffect, useState} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './Detail.scss';

let box = styled.div`
    padding : 20px;
`;
let box2 = styled.h4`
    font-size: 25px;
    color : ${props => props.색상}
`;

function Detail(props) {


    let [alert, alertChange] = useState(true);
    let [inputData, inputDataChange] = useState('');


    useEffect(() => {
        // 2초 후에 alert 창 안 보이게 해주셈
        let timer = setTimeout(() => {alertChange(false)}, 2000)
        return () => { clearTimeout(timer)}
        // 여러가지 이유로 버그 생성을 막기 위해, setTimeout을 끝내는 스킬
        
    }, []);
    // 밑에 alert를 넣어줌으로써 alert란 state가 변경될 때마다 작동
    // 당연히 alert state를 위에다가 작성해 주어야 함.




    let { id } = useParams();
    let history = useHistory();

    return (
        <div>
        <div className="container">

            <box>
                <box2 className="red"> Detail </box2>
            </box>





            <input onChange={(e)=>{inputDataChange(e.target.value)}} />






            {/* UI를 항상 켜 놓는 게 아니라면, 이런 식으로 스위치를 만든다 */}
            {
                alert === true
                ? <div className="my-alert2">
                    <p> 재고가 얼마 남지 않았습니다. </p>
                </div>
                : null
            }
            

            <div className="row">
                <div className="col-md-6">
                <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
            </div>
            <div className="col-md-6 mt-4">
                <h4 className="pt-5">{props.shoes[id].title}</h4>
                <p>{props.shoes[id].content}</p>
                <p>{props.shoes[id].price}</p>
                <button className="btn btn-danger">주문하기</button> 
                <button className="btn btn-danger" onClick={()=>{
                    history.goBack();
                    // history.push('/'); 얘는 경로 지정
                }}>뒤로가기</button> 
            </div>
            </div>
        </div> 
        </div> 
    )
}

export default Detail