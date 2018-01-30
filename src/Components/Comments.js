import React, { Component } from 'react';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'Contributor': '',
            'Comments': '',
        }
    }
}