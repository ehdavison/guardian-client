import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = credentials => {
  return axios({
    url: apiUrl + '/sign-up',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.password_confirmation
      }
    }
  })
}

export const signIn = credentials => {
  return axios({
    url: apiUrl + '/sign-in',
    method: 'POST',
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  })
}

export const signOut = user => {
  return axios({
    url: apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user}`
    }
  })
}

export const changePassword = (oldPassword, newPassword, user) => {
  return axios({
    url: apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user}`
    },
    data: {
      passwords: {
        old: oldPassword,
        new: newPassword
      }
    }
  })
}