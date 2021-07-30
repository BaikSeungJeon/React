import React from 'react'

function LoginPage() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            , width: '100%', height: '100vh'
        }}>
            <form>
                <label>Email</label>
                <input type="email" value onChange />
                <label>Password</label>
                <input type="Password" value onChange />
                <br/>
                <button>login</button>
            </form>
        </div>
    )
}

export default LoginPage
