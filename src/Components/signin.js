import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';

const port = process.env.PORT || 5280;

export default class Signin extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.login = this.login.bind(this);
    };

    handleUsername(event) {
        this.setState({ username: event.target.value });
    }

    handlePassword(event) {
        this.setState({ password: event.target.value });
    }

    login(event) {
        event.preventDefault();
        const data = { username: this.state.username, password: this.state.password };
        axios.post(`http://localhost:${port}/userLogin`, data)
            .then(response => {
                alert('You are logged in!');
            })
            .catch(err => {
                if (err) {
                    alert('Invalid Credentials!');
                }
            }
        ); 
    }

    render() {
        return(
            <div>
            <h2><i>Sign In:</i></h2>
                <form>
                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}
                            onChange={ this.handleUsername }
                            placeholder='Username'
                            type='text'
                            value={ this.state.username }
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormControl
                            style={{color: 'dodgerBlue'}}
                            onChange={ this.handlePassword }
                            placeholder='Password'
                            type='password'
                            value={ this.state.password }
                        />
                    </FormGroup>
                    <button style={{color: 'red'}} onClick={ this.login }>Sign In</button>
                </form>
            </div>
        )
    }
}

