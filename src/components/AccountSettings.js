import React from 'react';
import {useState} from 'react';
import {changePassword} from '../api/auth'

const AccountSettings = (props) => {
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const onChangePassword = (event) => {
        event.preventDefault()
        changePassword(oldPassword, newPassword, props.userToken)
        .then((res) => {
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <h2>Change Password</h2>
            <form className='change-pw-form' onSubmit={onChangePassword}>
                <label for='old-password'>Old Password</label>
                <input className='change-pw-input' name='old-password' type='text' placeholder='Old Password' onChange={(event) => setOldPassword(event.target.value)}></input>

                <label for='new-password'>New Password</label>
                <input className='change-pw-input' name='new-password' type='text' placeholder='New Password' onChange={(event) => setNewPassword(event.target.value)}></input>

                <input className='change-pw-input change-pw-submit' type='submit' value='Submit'></input>
            </form>
        </div>
    );
};

export default AccountSettings;