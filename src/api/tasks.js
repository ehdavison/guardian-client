import apiUrl from '../apiConfig'
import axios from 'axios'

export const indexTasks = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/tasks',
    headers: {
      'Authorization': `Bearer ${user}`
    }
  })
}

export const showTask = (user, taskId) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/tasks/' + taskId,
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const deleteTask = (user, taskId) => {
  return axios({
    method: 'DELETE',
    url: apiUrl + '/tasks/' + taskId,
    headers: {
      Authorization: `Bearer ${user}`
    }
  })
}

export const createTask = (user, task) => {
  return axios({
    method: 'POST',
    url: apiUrl + '/tasks',
    headers: {
      Authorization: `Bearer ${user}`
    },
    data: { task }
  })
}

export const updateTask = (user, task, id) => {
  return axios({
    method: 'PATCH',
    url: apiUrl + '/tasks/' + id,
    headers: {
      Authorization: `Bearer ${user}`
    },
    data: { task: task }
  })
}
