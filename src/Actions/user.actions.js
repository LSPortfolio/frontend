import { constants } from '../Constants'
import { services } from '../Services/'
import { alertActions } from './'
import { history } from '../Helpers/history'

export const register = user => {
  return dispatch => {
    dispatch(request(user))
    services.register(user).then(
      user => {
        console.log('register dispatched')
        console.log(user)
        dispatch(success(user))
        history.push('/')
        dispatch(alertActions.success('Registration successful'))
      },
      error => {
        console.log(error)
        dispatch(failure(error))
        dispatch(alertActions.error(error))
      }
    )
  }
  function request(user) { return { type: constants.REGISTER_REQUEST, user } }
  function success(user) { return { type: constants.REGISTER_SUCCESS, user } }
  function failure(error) { return { type: constants.REGISTER_FAILURE, error } }
}

export const login = (username, password) => {
  return dispatch => {
    dispatch(request({ username }))
    services.login(username, password).then(
      user => {
        console.log('login successful')
        dispatch(success(user))
        history.push('/')
      },
      error => {
        console.log(error.response.data)
        dispatch(failure(error.response.data))
        dispatch(alertActions.error(error.response.data))
      }
    )
  }
  function request(user) { return { type: constants.LOGIN_REQUEST, user } }
  function success(user) { return { type: constants.LOGIN_SUCCESS, user } }
  function failure(error) { return { type: constants.LOGIN_FAILURE, error } }
}

export const logout = () => {
  services.logout()
  return { type: constants.LOGOUT }
}