import React, { Component } from 'react';
import { Button, FormGroup, FormControl, Dropdown } from 'react-bootstrap';

export default class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
            graduated: false
        };
    }

    render() {
        return (
            <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                <h1 style={{borderBottomStyle: 'solid'}}>Settings</h1>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <FormGroup style={{width: '25%', textAlign: 'center', display: 'flex', flexDirection: 'column'}}>
                        <FormControl
                            placeholder='Email'
                            onChange={(e) => this.setState({email: e.target.value})}
                        />
                        <FormControl
                            placeholder='Password'
                            type='password'
                            onChange={(e) => this.setState({password: e.target.value})}
                        />
                        <FormControl
                            placeholder='Confirm Password'
                            type='password'
                            onChange={(e) => this.setState({passwordConfirm: e.target.value})}
                        />
                        <label>{this.state.password === this.state.passwordConfirm ? null : 'Your passwords must match'}</label>
                        <label>{this.state.password.length > 7 ? null : 'Your password must be at least 8 characters'}</label>
                        <select placeholder='select here'>
                            <option disabled='disabled'>Graduate Status</option>
                            <option value='student'>Student</option>
                            <option value='alumni'>Alumni - Only select if you have graduated</option>
                        </select>
                        <Button style={{color: 'white'}}>Submit</Button>
                    </FormGroup>
                </div>
            </div>
        );
    }
}