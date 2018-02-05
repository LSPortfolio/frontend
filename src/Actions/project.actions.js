import { constants } from '../Constants';
import { services } from '../Services/';
import { alertActions } from './';
import { history } from '../Helpers/history';
import axios from 'axios';

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
    function request(project) { return { type: constants.PROJECT_SUBMIT, project } }
    function success(project) { return { type: constants.PROJECT_SUBMIT, project } }
    function failure(error) { return { type: constants.PROJECT_SUBMIT, error } }
  }

  export const getProjects = () => {
    const promise = axios.get('http://localhost:5280/project/all')
    return({
      type: constants.GET_PROJECTS,
      payload: promise
    });

  }
