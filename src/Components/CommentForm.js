import React from 'react';
import { connect } from 'react-redux';
import { textChange, authorChange, addComment } from '../Actions/comments.actions';

const CommentForm = (props, { author, text }) => (
    <form className="commentForm"
          onSubmit={ (e) => {
            e.preventDefault();
            dispatch(addComment({author, text}));
          }}
    >
      <input type="text" name="author" 
      placeholder="Your name"
      onChange={(e) => dispatch(authorChange(e.target.value))}
       />
      <input type="text" name="text" placeholder="Say something..."
      onChange={(e) => dispatch(textChange(e.target.value))}
      />
      <button>Post</button>
    </form>
  );

  const mapStateToProps = (state) => {
    return {
        comments: state.commentsReducer
    }
}

export default connect(mapStateToProps, { addComment },{ authorChange},{ textChange })(CommentForm);
