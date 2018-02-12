import { constants } from '../Constants';
import { combineReducers } from 'redux';

export const projectReducer = (projects = [], action) => {
    switch (action.type) {
        case constants.GET_PROJECTS:
            return action.payload.data;
        default:
            return projects;
    };
};

 pickedProjectReducer = (pickedProject = {}, action) => {
	switch (action.type) {
    	case constants.PICK_PROJECT:
    		return action.payload.data;
    default: 
        return pickedProject;
    };
};

const rootReducer = combineReducers({
	projects: projectReducer,
	pickedProject: pickedProjectReducer
});