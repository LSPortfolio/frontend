import axios from 'axios'

export const services = {
  login,
  logout,
  register,
  // getAll,
  // getById,
  // update,
  // delete: _delete
}

function register(user) {
  return axios.post('http://localhost:5280/user/create', user)
    .then(handleResponse)
    .then(saveToken);
}

function createProject(project) {
  return axios.post('http://localhost:5280/createproject', project)
    .then(handleResponse);
}

function login(username, password) {
  return axios.post('http://localhost:5280/user/login', ({ username, password }))
    .then(handleResponse)
    .then(saveToken);
}

function logout() {
  localStorage.removeItem('user');
}

function saveToken(user) {
  if (user && user.data.token) {
    localStorage.setItem('user', JSON.stringify(user.data.token));
  }
  return user;
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

