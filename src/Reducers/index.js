import { GET_USERNAME, GET_PASSWORD} from '../Actions/index';
import  {combineReducers} from 'redux';


const usersReducer = (users = [], action) => {
    switch (action.type) {
        case GET_USERNAME:
            return action.payload.data;
        default:
            return users;
    }
}

const passwordReducer = (password = [], action) => {
    switch (action.type) {
        case GET_PASSWORD: 
            return action.payload.data;
        default: 
            return password;
    }
}

const rootReducer = combineReducers({
    users: usersReducer,
    password: passwordReducer
});

export default rootReducer;