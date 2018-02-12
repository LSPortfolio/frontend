import { constants } from '../Constants';
import axios from 'axios';

  export const getProjects = () => {
    const promise = axios.get('https://rolandbackend.herokuapp.com/project/all');
    return({
        type: constants.GET_PROJECTS,
        payload: promise
    });
};

export const pickProject = () => {
    const promise = axios.get('https://rolandbackend.herokuapp.com/project/single${id}');
    return({
        type: constants.PICK_PROJECT,
        payload: promise
    });
};