import React, {useState} from 'react';
import { signIn } from '../api/auth'
import './auth.css'
import SignUp from './SignUp'

const SignIn = (props) => {
    const [password, setPassword] = useState()
    const [newUser, setNewUser] = useState(false)
    const onSubmit = (event) => {
        event.preventDefault()
        signIn({
            email: props.user,
            password: password
        })
        .then((res) => {
            props.setUserId(res.data.user._id)
            props.setUserToken(res.data.user.token)
            props.setLoggedIn(true)
        })
        .catch((err) => console.log(err))
    }
    return (
        <div className='signIn-container'>
            {!newUser && (
            <form className='signIn-form' onSubmit={onSubmit}>
                <h2>Sign In</h2>
                <label className='signIn-input' for='username'>Username</label>
                <input className='signIn-input' name='username' type='text' placeholder='Username' onChange={(event) => props.setUser(event.target.value)}></input>

                <label className='signIn-input' for='password'>Password</label>
                <input className='signIn-input' name='password' type='password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>

                <input className='signIn-input signIn-submit' type='submit' value='Submit'></input>
                <div className='auth-switch-container' onClick={() => setNewUser(true)}>
                    <p className='auth-switch'>Need an account?</p>
                </div>
            </form>
            )}
            {newUser && (
                <SignUp user={props.user} setUser={props.setUser} setUserId={props.setUserId} setUserToken={props.setUserToken} setNewUser={setNewUser}/>
            )}
        </div>
    );
};

export default SignIn;