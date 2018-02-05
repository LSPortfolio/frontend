import { constants } from '../Constants';
import { combineReducers } from 'redux';

const allprojectsReducer = (projects = [], action) => {
    switch(action.type) {
        case constants.GET_PROJECTS:
            return action.payload.data;
        default:
            return projects;

    }

};

const newProjectReducer = (newProject = [], action) => {
    switch(action.type) {
        case constants.PROJECT_SUBMIT:
        return { submit: true };
    default:
        return newProject;
    }
};

const projectReducer = combineReducers({
    allProjects: allprojectsReducer,
    newProject: newProjectReducer
});

export default projectReducer;