import axios from 'axios'
import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {loginUser} from '../../../_actions/user_action';




function LoginPage(props) {
    const dispatch = useDispatch();

    // email과 pw를 위한 state 만들기
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }
    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefalt(); // 로그인 버튼을 눌렀을 때 페이지가 리프레쉬 되는 것을 막음

        // console.log('Email : ', Email)
    // console.log('Password : ', Password)

    
    // 210731
    // 서버에 보낼 때

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
        .then(response => {
            if (response.payload.loginSuccess) { // 성공을 하면은
                props.history.push('/') // '/' (루트 페이지 = landing 페이지)
            } else {
                alert('Error')
            }
        })
    }

    

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form style={{display:'flex', flexDirection: 'column'}}
                onSubmit={onSubmitHandler}
            >
                <label>Email</label>
                <input type="email" value={Email} onChange={onEmailHandler} />
                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler} />
                <br/>
                <button type="submit">
                    login
                </button>
            </form>
        </div>
    )
}

export default LoginPage
