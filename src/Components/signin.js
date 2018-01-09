import React, { Component } from 'react';

const port = process.env.PORT || 5280;

export default class Signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: ''
        };
    }

    componentDidMount() {
        fetch(`localhost:${port}/userLogin`, {
            method: 'post',
            body: JSON.stringify({
                username: this.state.userName,
                password: this.state.password
            })
        })
        .then(console.log(`${this.state.userName}`))
        .then((res) => {
            return res.json();
        })
        .then(console.log(`Success!`))
    }

    render() {
        return (
            <div>
            <h2>Sign In:</h2>
                <form>
                    <label style={{marginRight: 25}}>Username:</label>
                    <input onChange={(e) => this.setState({userName: e.target.value})} value={this.state.userName} type="text" name="username" /><br/>
                    <label style={{marginRight: 25}}>Password:</label>
                    <input onChange={(e) => this.setState({password: e.target.value})} value={this.state.password} type="text" name="password" /><br/>

                    <input type='submit' value="Sign In" />
                
                </form>
            </div>
        );
    }
}