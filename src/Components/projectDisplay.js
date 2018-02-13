import React, { Component } from 'react';
import { pickProject } from '../Actions/project.actions';
import { connect } from 'react-redux';
import { FileShare } from '../Assets/SocialMedia/fileShare';

// import {FormControl, FormGroup} from 'react-bootstrap';


 class ProjectDisplay extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             image: 'https://odis.homeaway.com/odis/listing/65d6eedc-8953-4575-8746-2a13e6d205e2.c10.jpg',
//             contributor: 'Eric',
//         }
        
//  }

    componentDidMount() {
        this.props.pickProject(this.props.match.params.id);
    }
    
    render() {
        return(
            <div className="boxmodel">
            
                <h1>{this.props.pickedProject.projectName}</h1>
                <h3>{this.props.pickedProject.github}</h3>
                <img src="https://cdn.bestdegreeprograms.org/wp-content/uploads/2015/11/Computer-programmer-11.2015.jpg" />
                <FileShare />
                <p>{this.props.pickedProject.description}</p>


                
            {/* <figure className="grid-figure">
				<div>
                	<img src={this.state.image} style={{height:500, width:500}}/>
					<h1>This students project</h1>
					<h4>Contributors:{this.state.contributor}</h4>
					<p>Project description</p>
				</div>

                <FormGroup>
					<FormControl 
						className="input_form"
						placeholder="Add Comment"
					/>
                </FormGroup>
                <button>Submit</button>
            </figure> */}
            
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      pickedProject: state.pickedProject
    }
  }
  
  export default connect(mapStateToProps, { pickProject })(ProjectDisplay);





