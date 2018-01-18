import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormControl, FormGroup } from 'react-bootstrap';

import { login } from '../Actions';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            submitted: false,
            token: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) dispatch(login(username, password));
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        return(
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{backgroundColor: 'white', display: 'flex', justifyContent: 'center'}}>
                    <h2 style={{color: 'dodgerBlue', paddingRight: 20}}><i>Sign In:</i></h2>
                    <form>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                onChange={ this.handleChange }
                                placeholder='Username'
                                name='username'
                                value={ username }
                            />
                        </FormGroup>
                        <FormGroup>
                            <FormControl
                                style={{color: 'dodgerBlue'}}
                                onChange={ this.handleChange }
                                placeholder='Password'
                                name='password'
                                value={ password }
                            />
                        </FormGroup>
                        <button style={{color: 'darkBlue'}} onClick={ this.handleSubmit }>Sign In</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { loggingIn } = state.authentication
    return {
        loggingIn
    }
}

const connectedSignIn = connect(mapStateToProps)(SignIn)
export { connectedSignIn as SignIn }