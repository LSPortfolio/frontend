import React, { Component } from 'react';
import { pickProject } from '../Actions/project.actions';
import { connect } from 'react-redux';
import { FileShare } from '../Assets/SocialMedia/fileShare';
import { Script } from 'vm';
import CommentBox from './CommentsBox';	
import CommentList from './CommentList';


// import {FormControl, FormGroup} from 'react-bootstrap';


class ProjectDisplay extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         // image: 'https://odis.homeaway.com/odis/listing/65d6eedc-8953-4575-8746-2a13e6d205e2.c10.jpg',
    //         // contributor: 'Eric',
    //     };
    // }

    componentDidMount() {
        this.props.pickProject(this.props.match.params.id);
    }
    
    render() {
        const formatDate = date => {
        const months = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ]

        const day = date.getDate()
        const month = date.getMonth()
        const year = date.getFullYear()

        return `${months[month]} ${day}, ${year}`;
        }


        return(
            <div className="boxmodel">
                {/*<h1>{Date.now().prototype.getMonth()}</h1>*/}
                <h1 style={{borderStyle: 'solid', borderTopStyle: 'hidden', borderRadius: 5}}>{this.props.pickedProject.projectName}</h1>
                <h2>{this.props.pickedProject.media}</h2>
                <h4>{formatDate(new Date(this.props.pickedProject.created))}</h4>
                {/*<h2>{ISODate(this.props.pickedProject.created).toTimeString()}</h2>*/}

                
                    
                <img alt='Project Sample' src="https://cdn.bestdegreeprograms.org/wp-content/uploads/2015/11/Computer-programmer-11.2015.jpg" />
                <div style={{marginTop: '50px', display: 'flex', flexDirection:'row', borderTopStyle: 'solid', borderBottomStyle: 'solid', borderRadius: 10}}>
                    <FileShare />
                    <a target='_blank' href={this.props.pickedProject.github}><img alt='GitHub' className='logosize imagesmadeformediabuttons'src={require('../Assets/SocialMedia/githubLogo.png')}/></a>
                </div>
                <p>{this.props.pickedProject.description}</p>
                <CommentList />
      	        <CommentBox />


                
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





