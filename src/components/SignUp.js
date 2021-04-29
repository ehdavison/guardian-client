import React, {useState} from 'react';
import {signUp} from '../api/auth';
import './auth.css'

const SignUp = (props) => {
    const [password, setPassword] = useState();
    const [password_confirmation, setPasswordConfirmation] = useState();

    const onSubmit = (event) => {
        event.preventDefault()
        signUp({
            email: props.user,
            password: password,
            password_confirmation: password_confirmation
        })
        .then((res) => {
            props.setUserId(res.data.user._id)
            props.setUserToken(res.data.user.token)
            props.setNewUser(false)
        })
        .catch((err) => console.log(err))
    };
    return (
        <div className='signUp-container'>
            <form className='signUp-form' onSubmit={onSubmit}>
                <h2>Sign Up</h2>
                <label className='signUp-input' for='username'>Username</label>
                <input className='signUp-input' name='username' type='text' placeholder='Username' onChange={(event) => props.setUser(event.target.value)}></input>

                <label className='signUp-input' for='password'>Password</label>
                <input className='signUp-input' name='password' type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>

                <label className='signUp-input' for='password_confirmation'>Password Confirmation</label>
                <input className='signUp-input' name='password_confirmation' type='password' placeholder='Confirm Password' onChange={(event) => setPasswordConfirmation(event.target.value)}></input>
                
                <input className='signUp-input signUp-submit' type='submit' value='Submit'></input>
                <div className='auth-switch-container' onClick={() => props.setNewUser(false)}>
                    <p className='auth-switch'>Already have an account?</p>
                </div>
            </form>
        </div>
    )
};

export default SignUp;