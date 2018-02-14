import { ADD_COMMENT, AUTHOR_CHANGE, TEXT_CHANGE } from '../Actions/comments.actions';



export const commentsReducer = (state={
    items: [],
    author: '',
    text: ''
}, action) => {
    switch (action.type) {
        case ADD_COMMENT:
        return {
            ...state,
            items: [...state.items, 
            {id: Math.random(), ...action.comment}]
        }

        case AUTHOR_CHANGE:
        return {
            ...state,
            author: action.author
        }

        case TEXT_CHANGE:
        return {
            ...state,
            text: action.text
        };

        default:
            return state;
    };

}