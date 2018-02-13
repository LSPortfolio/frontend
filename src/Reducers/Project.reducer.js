// import { constants } from '../Constants';
import { GET_PROJECTS, PICK_PROJECT } from '../Actions/project.actions';

export const projects = (state = [], action) => {
    switch (action.type) {
        case GET_PROJECTS:
            return action.payload.data;
        default:
            return state;
    };
};

 export const pickedProject = (state = {}, action) => {
	switch (action.type) {
    	case PICK_PROJECT:
    		return action.payload.data;
    default: 
        return state;
    };
};



