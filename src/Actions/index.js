import axios from 'axios';

export const GET_USERNAME = 'GET_USERNAME';
export const GET_PASSWORD = 'GET_PASSWORD';


export const getUsers = () => {
    const promise = axios.get('http://localhost:5280/createUsername');
    return({
        type: GET_USERNAME,
        payload: promise 
    });
};

export const getPassword = () => {
    const promise = axios.get('http://localhost:5280/');
    return({
        type: GET_PASSWORD,
        payload: promise
    });
}
