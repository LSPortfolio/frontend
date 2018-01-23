import React, { Component } from 'react';
import axios from 'axios';

class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Project: '',
            Description: '',
            Media: [],
            Contributer: ''
        }
    }
    render() {
        return(
            <div>
                <h1>{this.state.Name}</h1>
            </div>
        );
    }
}

export default NewProject;