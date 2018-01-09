import React, { Component } from 'react';

const port = process.env.PORT || 5280;

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            userName: '',
            password: '',
            email: '',
            question: ''

        };
    }

    componentDidMount() {
        fetch(`localhost:${port}/createUser`, {
            method: 'post',
            body: {
                username: this.state.userName,
                password: this.state.password,
                email: this.state.email,
                question: this.state.question
            }
        })
        .then((res) => {
            return res.json();
        })
    }

    render() {
        return (
            <div>
            <h2><i>Sign Up:</i></h2>
                <form style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignContent: 'flex-start'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>                    
                        <input style={{color: 'dodgerBlue'}} placeholder='First Name' onChange={(e) => this.setState({firstName: e.target.value})} value={this.state.firstName} type="text" name="firstname" /><br/>
                        <input style={{color: 'dodgerBlue'}} placeholder='Last Name' onChange={(e) => this.setState({lastName: e.target.value})} value={this.state.lastName} type="text" name="lastname" /><br/>
                        <input style={{color: 'dodgerBlue'}} placeholder='Username' onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} type="text" name="username" /><br/>
                        <input style={{color: 'dodgerBlue'}} placeholder='Password' onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="password" name="password" /><br/>
                        <input style={{color: 'dodgerBlue'}} placeholder='Email' onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} type="text" name="email" /><br/>
                        <input style={{color: 'red'}} type="submit" value="Sign Up"/>
                    </div>
                </form>
            </div>
        );
    }
}

