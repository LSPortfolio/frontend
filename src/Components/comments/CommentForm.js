// import React, { Component } from 'react';

// class CommentForm extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             propTypes: {
//                 onCommentSubmit: React.PropTypes.func.isRequired,
//               }
//         }
//     }
//     getInitialState() {
//         return {author: '', text: ''}
//     }
//     handleAuthorChange(e) {
//         return e.target.value;
//     }
//     handleTextChange(e) {
//         return e.target.value;
//     }
//     handleSubmit(e) {
//         e.preventDefault();
//         let author = this.state.author.trim();
//         let text = this.state.text.trim();
//         this.props.onCommentSubmit({author: author, text:text});
//         this.setState({author:'', text:''})
//     }
//     render() {
//         return(
//             <form onSubmit={this.handleSubmit}>
//                 <input placeholder="Your name" type="text" onChange={this.handleAuthorChange} value={this.state.author} required="required"/>
//                 <input placeholder="Comment" type="text" onChange={this.handleTextChange} value={this.state.text} required="required" />
//                 <input type="submit" value="Post" />

//             </form>
//         );
//     }
// }

// export default CommentForm;