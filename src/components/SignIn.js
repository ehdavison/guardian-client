import React, {useState} from 'react';
import { signIn } from '../api/auth'

const SignIn = (props) => {
    const [password, setPassword] = useState()

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
        <div>
            <form onSubmit={onSubmit}>
                <label for='username'>Username</label>
                <input name='username' type='text' placeholder='Username' onChange={(event) => props.setUser(event.target.value)}></input>

                <label for='password'>Password</label>
                <input name='password' type='text' placeholder='Password' onChange={(event) => setPassword(event.target.value)}></input>

                <input type='submit' value='Submit'></input>
            </form>
        </div>
    );
};

export default SignIn;