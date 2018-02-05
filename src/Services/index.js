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

// const HOST_PROJECT = 'http://localhost:5280/createproject';
const NEW_USER_HOST = 'http://localhost:5280/user/create';
const USER_LOGIN = 'http://localhost:5280/user/login';

/* ——— Authentication ——— */
function register(user) {
  return axios.post(NEW_USER_HOST, user)
    .then(handleResponse)
    .then(saveToken);
}

function login(username, password) {
  return axios.post(USER_LOGIN, ({ username, password }))
    .then(handleResponse)
    .then(saveToken);
}

function logout() {
  localStorage.removeItem('user')
}

/* ——— Project ——— */
function createProject(project) {
  return axios.post(HOST_PROJECT, project)
    .then(handleResponse);
}

function addComment(contributer, comment) {
  return axios.post('/createproject/${commentId}', ({ contributer, comment }))
  .then(handleResponse);
}

function deleteComment(contributer, comment) {
  return axios.delete('/createproject/${commentId}', ({ contributer, comment }))
  .then(handleResponse);
}

/* ——— Utilities ——— */
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
