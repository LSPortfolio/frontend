import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from 'react-bootstrap';

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h1>Settings</h1>
                <FormGroup>
                    <FormControl
                        placeholder='Email'
                    />
                </FormGroup>
            </div>
        );
    }
}