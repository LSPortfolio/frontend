import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
// import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { projects } from './Project.reducer';
import { pickedProject } from './Project.reducer';


const rootReducer = combineReducers({
    authentication,
    registration,
    // users,
    alert,
    projects,
	pickedProject
});

export default rootReducer;