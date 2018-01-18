import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class NavbarLambda extends Component {

    constructor() {
        super();
    }

    render () {
        return (
            <div style={{display: 'flex', justifyContent: 'space-around'}}>
                <Link style={{color: 'white'}} to='/'>Home</Link>
                <Link style={{color: 'white'}} to='/signin'>Sign In</Link>
                <Link style={{color: 'white'}} to='/signup'>Sign Up</Link>
                <Link style={{color: 'white'}} to='/passwordReset'>Forgot Password</Link>
                <Link style={{color: 'white'}} to='/submit'>Submit</Link>
            </div>
        );
    }
}