import React, { Component } from 'react';
import Header from './Header';
import data from './something';
import axios from 'axios'
import './submit.css';



class ContentFinal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    axios.post('https://lambda-showcase-backend.herokuapp.com/project/create', data)
      .then(response => {
        alert('Project Sent');
      })
      .catch(response => {
        alert('did not work');
      })
  }

  render() {
    return (
      <div className="row">
      <Header
        headerText="About ready to submit :D"
        helperText="Review if you'd like!"
      />
      <div className="col-sm-6 col-sm-offset-3">
      <div className="boxmodel">
            
                <h1>{data.projectName}</h1>
                <img className="media" src={data.cover}/>
                <div>
                    <a target='_blank' href={data.github}><img className='logosize imagesmadeformediabuttons'src={'https://packagecontrol.io/readmes/img/a59a44b1a383ad42e195fa34f0ad2756f46c77a2.png'}/></a>
                </div>
                <p>{data.description}</p>
            </div>
        <button onClick={this.handleSubmit} className="btn btn-primary pull-right icon-last" type="submit">
          Submit Project
          <i className="fa fa-plus"></i>
        </button>
      </div>
      </div>
    )
  }
}

export default ContentFinal;