import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';
import NavbarLambda from './navbarLambda'

const port = process.env.PORT || 5280;

export default class PasswordToken extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            token: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    submitEmail(e) {
        e.preventDefault();
        const data = {
            answer: this.state.answer,
            password: this.state.password
        };
        axios.post(`localhost://${port}/user/resetPassword`)
        .then((res) => {
            alert('Check your email for a link to reset your password!');
        })
        .catch((err) => {
            alert('Password reset unsuccessful!');
        })
    }

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column'}}>
                <header className="App-header" style={{color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', flexDirection: 'column'}}>
                    <NavbarLambda />
                </header>
                <p style={{display: 'flex', justifyContent: 'center'}}>Please provide your email:</p>
                <form style={{display: 'flex', justifyContent: 'center'}}>
                    <FormGroup>
                        <FormControl onChange={this.handleEmailChange}></FormControl>
                    </FormGroup>
                <button onClick={this.submitEmail}>Submit</button>
                </form>
            </div>
        );
    }
}