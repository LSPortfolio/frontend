import { constants } from '../Constants';
import { services } from '../Services/';
import { alertActions } from './';
import { history } from '../Helpers/history';

export const newProject = project => {
    return dispatch => {
      dispatch(request(project))
      services.createProject(project).then(
        user => {
          dispatch(success(project))
          history.push('/')
          dispatch(alertActions.success('project submitted'))
        },
        error => {
          const { response, message } = error
          if (!response) {
            dispatch(failure(message))
            dispatch(alertActions.error(message))
          } else if (response.hasOwnProperty('data')) {
            dispatch(failure(response.data))
            dispatch(alertActions.error(response.data))
          }
        }
      )
    }
    function request(project) { return { type: constants.REGISTER_REQUEST, project } }
    function success(project) { return { type: constants.REGISTER_SUCCESS, project } }
    function failure(error) { return { type: constants.REGISTER_FAILURE, error } }
  }
