import React from 'react';

export const ADD_COMMENT = 'ADD_COMMENTS';
export const AUTHOR_CHANGE = 'AUTHOR_CHANGE';
export const TEXT_CHANGE = 'TEXT_CHANGE';


export const addComment = (comment={author:'', text: ''}) => {
    type: ADD_COMMENT
    comment
}

export const authorChange = (author = '') => {
    type: AUTHOR_CHANGE
    author
}

export const textChange = (text = '') => {
    type: TEXT_CHANGE
    text
}


