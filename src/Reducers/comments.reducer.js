import { SAVE_COMMENT } from '../Actions/comments.actions';


export const commentsReducer = (state = [], action) => {
	switch(action.type) {
		case SAVE_COMMENT:
			return [ ...state, action.payload ];

    }
	return state;
}	

 