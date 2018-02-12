import React, { Component } from 'react';

class usersPushed extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return (
      <ul>
        { this.props.contributors.map((data) => {
          return <li> { data } </li>
        })}
      </ul>
    )
  }
}

export default usersPushed;