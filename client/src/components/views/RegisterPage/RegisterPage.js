import React, {useState} from 'react'
import {useDispatch} from 'react-redux';
import {registerUser} from '../../../_actions/user_action';



function RegisterPage(props) {

    const dispatch = useDispatch();

    // email과 pw를 위한 state 만들기
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Name, setName] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")





    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        event.preventDefalt(); // 로그인 버튼을 눌렀을 때 페이지가 리프레쉬 되는 것을 막음

        // console.log('Email : ', Email)
    // console.log('Password : ', Password)

    
    // 210731 ~ 210801
    // 서버에 보낼 때

        if(Password !== ConfirmPassword) { // 비밀번호와 비밀번호 확인이 같지 않다면
            return alert('비밀번호가 일치하지 않습니다.') // alert 창 호출
        } // 같을 때까지 계속 돌리기

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(registerUser(body))
        .then(response => {
            if (response.payload.Success) { // 성공을 하면은
                props.history.push('/login') // '/login' 페이지로 보내기
            } else {
                alert('회원가입에 실패했습니다.')
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

                <label>Name</label>
                <input type="text" value={Name} onChange={onNameHandler} />

                <label>Password</label>
                <input type="Password" value={Password} onChange={onPasswordHandler} />

                <label>Confirm Password</label>
                <input type="Password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />

                <br/>
                <button type="submit">
                    회원 가입
                </button>
            </form>
        </div>
    )
}

export default RegisterPage
