import React, {useState} from 'react';
import {signUp} from '../api/auth';

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
        })
        .catch((err) => console.log(err))
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label for='username'>Username</label>
                <input name='username' type='text' placeholder='Username' onChange={(event) => props.setUser(event.target.value)}></input>

                <label for='password'>Password</label>
                <input name='password' type='text' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>

                <label for='password_confirmation'>Password Confirmation</label>
                <input name='password_confirmation' type='text' placeholder='Confirm Password' onChange={(event) => setPasswordConfirmation(event.target.value)}></input>

                <input type='submit' value='Submit'></input>
            </form>
        </div>
    )
};

export default SignUp;