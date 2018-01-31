import { constants } from '../Constants';


const getallProjects = (Projects = [], action) => {
    switch(action.type) {
        case constants.GET_PROJECTS:
            return action.payload.data;
        default:
            return Projects;
    }
}

export default getallProjects;