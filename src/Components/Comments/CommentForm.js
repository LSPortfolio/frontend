import React from 'react';

const CommentForm = (props, { author, text }) => (
    <form className="commentForm"
          onSubmit={ (e) => {
            e.preventDefault();
            comments = comments.concat({
              author: e.target.elements.author,
              text: e.target.elements.text
            });
          }}
    >
      <input type="text" name="author" placeholder="Your name" />
      <input type="text" name="text" placeholder="Say something..." />
      <button>Post</button>
    </form>
  );