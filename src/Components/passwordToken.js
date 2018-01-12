import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FormControl, FormGroup } from 'react-bootstrap';

export default class PasswordToken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.submitEmail = this.submitEmail.bind(this);
    }

    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    submitEmail(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div style={{justifyContent: 'center', color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', flexDirection: 'column', alignContent: 'center'}}>
                <div style={{paddingBottom: 10, color: 'white', backgroundColor: 'dodgerBlue', display: 'flex', justifyContent: 'space-around'}}>
                    <Link style={{color: 'white'}} to='/'>Home</Link>
                    <Link style={{color: 'white'}} to='/signin'>Sign In</Link>
                    <Link style={{color: 'white'}} to='/signup'>Sign Up</Link>
                </div>
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