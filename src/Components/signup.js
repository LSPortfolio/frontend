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

        };
    }

    componentDidMount() {
        fetch(`localhost:${port}/createUser`, {
            method: 'post',
            body: {
                username: this.state.userName,
                password: this.state.password,
                email: this.state.email
            }
        })
        .then((res) => {
            return res.json();
        })
    }

    render() {
        return (
            <div>
            <h2>Sign Up:</h2>
                <form>
                    <label style={{marginRight: 25}}>First Name:</label>
                    <input onChange={(e) => this.setState({firstName: e.target.value})} value={this.state.firstName} type="text" name="firstname" /><br/>

                    <label style={{marginRight: 25}}>Last Name:</label>
                    <input onChange={(e) => this.setState({lastName: e.target.value})} value={this.state.lastName} type="text" name="lastname" /><br/>

                    <label style={{marginRight: 25}}>Username:</label>
                    <input onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} type="text" name="username" /><br/>
                    
                    <label style={{marginRight: 25}}>Password:</label>
                    <input onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="text" name="password" /><br/>
                    
                    <label style={{marginRight: 25}}>Email:</label>
                    <input onChange={(e) => this.setState({email: e.target.value})} value={this.state.email} type="text" name="email" /><br/>
                    
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        );
    }
}

