import React from 'react';
import Logout from './Logout';
import LoginForm from './LoginForm';

function Login(props) {

    let loginok=localStorage.loginok;

    return (
        <div>
            {
                loginok==null?<LoginForm/>:<Logout/>
            }
        </div>
    );
}

export default Login;