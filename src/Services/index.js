// import { authHeader } from '../Helpers'
import axios from 'axios'

export const services = {
  login,
  // logout,
  register,
  // getAll,
  // getById,
  // update,
  // delete: _delete
}

function register(user) {
  return axios.post('http://localhost:5280/user/create', user).then(handleResponse)
}

function login(username, password) {
  return axios.post('http://localhost:5280/user/login', ({ username, password })).then(handleResponse)
}

function handleResponse(response, err) {
  if (err) {
    console.log('err');
    return Promise.reject(response.statusText)
  }
  console.log('—— handleResponse ——');
  console.log(response);
  return response
}