import React, { Component } from 'react';
import axios from 'axios';
import { FormControl, FormGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavbarLambda from './navbarLambda'

const port = process.env.PORT || 5280;

export default class Signin extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            token: '',
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
        axios.post(`http://localhost:${port}/user/userLogin`, data)
            .then(response => {
                alert('You are logged in');
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
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <header>
                    <NavbarLambda />
                </header>
                <div style={{backgroundColor: 'dodgerBlue', display: 'flex', justifyContent: 'center'}}>
                    <h2 style={{color: 'white', paddingRight: 20}}><i>Sign In:</i></h2>
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
                        <button style={{color: 'darkBlue'}} onClick={ this.login }>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

