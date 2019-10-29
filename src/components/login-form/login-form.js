import React from 'react';
import classNames from 'classnames/bind';
import { loginInput, inputFalse } from '../../constants/const-styles/styles'

import './login-form.css';

const styles = {
    loginInput,
    inputFalse
}

let cx = classNames.bind(styles);

const LoginForm = ({ name, submit, password,  error }) =>{

    let className = cx('loginInput', {inputFalse: error})

    return(
        <div className="login-section">
            <form className="login-form" onSubmit= {submit}>
                <h2 className="login-title">Login</h2>
                <input 
                    className={className}
                    placeholder="Name"
                   {...name.bind}
                    />
                <input 
                    className={className}
                    placeholder="Password"
                    type="password" 
                    {...password.bind}
                    />
                <button 
                    className="login-btn"
                    type="submit"
                    >
                        Log In
                </button>
            </form>
        </div>
    )
}

export default LoginForm;
