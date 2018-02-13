// import { constants } from '../Constants';
import axios from 'axios';


export const GET_PROJECTS = 'GET_PROJECTS';
export const PICK_PROJECT = 'PICK_PROJECTS'; 

  export const getProjects = () => {
    const promise = axios.get('https://rolandbackend.herokuapp.com/project/all');
    return({
        type: GET_PROJECTS,
        payload: promise
    });
};

export const pickProject = (_id) => {
    const promise = axios.get(`https://rolandbackend.herokuapp.com/project/single${_id}`);
    return({
        type: PICK_PROJECT,
        payload: promise
    });
};